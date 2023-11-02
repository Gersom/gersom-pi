import { useState, useEffect } from 'react';
import { 
  useSelector, 
  useDispatch
} from "react-redux";
import {getAllDogs, getNameDogs, searchChange} from "~common/store/action"
import Cards from "~components/Cards"
import Pagination from "~src/ui/components/Pagination"
import SearchBar from "~src/ui/components/SearchBar"

const Home = () => {
  const dispatch = useDispatch()
  const [pageLoading, setpageLoading] = useState(true)
  const searchText = useSelector(
    (state) => state.searchText
  )
  const dogsData = useSelector(
    (state) => state.dogs
  )
  const currentPage = useSelector(
    (state) => state.currentPage
  )
  const totalPage = useSelector(
    (state) => state.totalPage
  )

  const handlePage = (page) => {
    if (page > 1 && page < totalPage) {
      setpageLoading(true)
      if (searchText === '') dispatch(getAllDogs(page))
      else dispatch(getNameDogs(searchText, page))
    }
    else {
      if(page === 1 && currentPage !== 1) {
        setpageLoading(true)
        if (searchText === '') dispatch(getAllDogs(page))
        else dispatch(getNameDogs(searchText, page))
      } else {
        if(page === totalPage && currentPage !== totalPage){
          setpageLoading(true)
          if (searchText === '') dispatch(getAllDogs(page))
          else dispatch(getNameDogs(searchText, page))
        }
      }  
    }
  }

  useEffect(() => {
    dispatch(getAllDogs(currentPage))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setpageLoading(false)
  }, [dogsData])

  const handleSearch = (text) => {
    setpageLoading(true)
    dispatch(searchChange(text))
    
    if(text === '') dispatch(getAllDogs(1))
    else dispatch(getNameDogs(text))
  }

  return (
    <div className='Home'>
      <SearchBar titleName="Home" 
      onSearch={handleSearch} 
      />
      {
        pageLoading 
        ? <p>Page loading...</p> 
        : <div>
          <Pagination 
          prevAll={() => handlePage(1)}
          prev={() => handlePage(currentPage - 1)}
          currentPage={currentPage}
          totalPage={totalPage}
          next={() => handlePage(currentPage + 1)}
          nextAll={() => handlePage(totalPage)}
          />
          <Cards cards={dogsData} />
        </div>
      }
    </div>
  );
};

export default Home