import { useState, useEffect } from 'react';
import { 
  useSelector, 
  useDispatch
} from "react-redux";
import {
  getDogs, 
  getAllTemperaments, 
  pageChange,
  dogNameChange,
  temperamentNameChange
} from "~common/store/action"
import Cards from "~components/Cards"
import Pagination from "~src/ui/components/Pagination"
import SearchBar from "~src/ui/components/SearchBar"
import Filters from "~src/ui/components/Filters"

const Home = () => {
  const dispatch = useDispatch()
  const [pageLoading, setpageLoading] = useState(true)
  const [currentValue, setCurrentValue] = useState('')
  const paramsState = useSelector(
    (state) => state.params
  )

  const dogsState = useSelector(
    (state) => state.dogs
  )
  const temperamentsState = useSelector(
    (state) => state.temperaments
  )

  const currentPage = useSelector(
    (state) => state.currentPage
  )
  const totalPage = useSelector(
    (state) => state.totalPage
  )

  const handlePage = (newPage) => {
    if (newPage > 1 && newPage < totalPage) {
      setpageLoading(true)
      dispatch(pageChange(newPage))
    }
    else {
      if(newPage === 1 && currentPage !== 1) {
        setpageLoading(true)
        dispatch(pageChange(newPage))
      } else {
        if(newPage === totalPage && currentPage !== totalPage){
          setpageLoading(true)
          dispatch(pageChange(newPage))
        }
      }  
    }
  }

  const handleSearch = (value) => {
    setpageLoading(true)
    dispatch(dogNameChange(value))
  }

  const handleTemperament = (event) => {
    const tempName = event.target.value
    setpageLoading(true)
    dispatch(temperamentNameChange(tempName))
    setCurrentValue(tempName)
  }

  useEffect(() => {
    dispatch(getDogs(paramsState))
  }, [dispatch, paramsState])

  useEffect(() => {
    setpageLoading(false)
  }, [dogsState])

  useEffect(() => {
    dispatch(getDogs(paramsState))
    dispatch(getAllTemperaments())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className='Home'>
      <SearchBar titleName="Home" 
      onSearch={handleSearch} 
      />
      {
        pageLoading 
        ? <p>Page loading...</p> 
        : <div>
          <Filters 
          currentValue={currentValue}
          itemsList={temperamentsState} 
          onTemperament={handleTemperament} />

          <Pagination 
          prevAll={() => handlePage(1)}
          prev={() => handlePage(currentPage - 1)}
          currentPage={currentPage}
          totalPage={totalPage}
          next={() => handlePage(currentPage + 1)}
          nextAll={() => handlePage(totalPage)}
          />

          <Cards cards={dogsState} />
        </div>
      }
    </div>
  );
};

export default Home