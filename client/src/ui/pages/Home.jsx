import { useState, useEffect } from 'react';
import { 
  useSelector, 
  useDispatch
} from "react-redux";
import {getAllDogs} from "~common/store/action"
const Home = () => {
  const dispatch = useDispatch()
  const [pageLoading, setpageLoading] = useState(true)
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

  
  const pagination = (
    <div className='pagination'>
      <button 
      onClick={() => handlePage(1)}
      disabled={currentPage===1}>
        &#60;|</button>
      <button 
      onClick={() => handlePage(currentPage - 1)}
      disabled={currentPage===1}>
        &#60;</button>

      <p className='pagination__text'>
        Page {currentPage} de {totalPage}</p>

      <button 
      onClick={() => handlePage(currentPage + 1)}
      disabled={currentPage===totalPage}>
        &#62;</button>
      <button 
      onClick={() => handlePage(totalPage)}
      disabled={currentPage===totalPage}>
        |&#62;</button>
    </div>
  )

  return (
    <div className='Home'>
      <h2>Home</h2>
      {
        pageLoading 
        ? <p>Page loading...</p> 
        : pagination
      }
    </div>
      
  );
};

export default Home