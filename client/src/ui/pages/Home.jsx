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
  temperamentNameChange,
  originFilter,
  resetFilter,
  ascFilter,
  desFilter
} from "~common/store/action"
import Cards from "~components/Cards"
import Pagination from "~src/ui/components/Pagination"
import SearchBar from "~src/ui/components/SearchBar"
import Filters from "~src/ui/components/Filters"

const Home = () => {
  const dispatch = useDispatch()
  const [pageLoading, setpageLoading] = useState(true)
  const [tempValue, setTempValue] = useState('')
  const [originValue, setOriginValue] = useState('')
  const [orderValue, setOrderValue] = useState('')
  const paramsState = useSelector(
    (state) => state.params
  )

  const allDogsState = useSelector(
    (state) => state.allDogs
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
    setTempValue(tempName)
  }
  const handleOrigin = (event) => {
    const origin = event.target.value
    setOriginValue(origin)
    dispatch(originFilter(origin))
  }
  const handleOrder = (event) => {
    const orderVal = event.target.value
    setOrderValue(orderVal)
  }

  useEffect(() => {
    dispatch(getDogs(paramsState))
  }, [dispatch, paramsState])

  useEffect(() => {
    setpageLoading(false)
  }, [dogsState])
  useEffect(() => {
    if(orderValue == 'asc'){
      dispatch(ascFilter())
    } else if (orderValue == 'des') {
      dispatch(desFilter())
    } else {
      dispatch(resetFilter())
    } 
  }, [allDogsState, dispatch, orderValue])

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
          itemsList={temperamentsState} 
          tempValue={tempValue}
          onTemperament={handleTemperament}
          originValue={originValue}
          onOrigin={handleOrigin}
          orderValue={orderValue}
          onOrder={handleOrder} 
          />

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