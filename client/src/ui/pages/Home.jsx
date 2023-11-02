import { useState, useEffect } from 'react';
import { 
  useSelector, 
  useDispatch
} from "react-redux";
import {getAllDogs} from "~common/store/action"
import Cards from "~components/Cards"
import Pagination from "~src/ui/components/Pagination"

const Home = () => {
  const dispatch = useDispatch()
  const [pageLoading, setpageLoading] = useState(true)
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
      dispatch(getAllDogs(page))
    }
    else {
      if(page === 1 && currentPage !== 1) {
        setpageLoading(true)
        dispatch(getAllDogs(page))
      } else {
        if(page === totalPage && currentPage !== totalPage){
          setpageLoading(true)
          dispatch(getAllDogs(page))
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
  }, [currentPage])

  return (
    <div className='Home'>
      <h2>Home</h2>
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