const Pagination = ({
  prevAll, prev, currentPage, totalPage, next, nextAll
}) => {

  return (
    <div className='c-pagination'>
      <button 
      onClick={prevAll}
      disabled={currentPage===1}>
        &#60;|</button>
      <button 
      onClick={prev}
      disabled={currentPage===1}>
        &#60;</button>

      <p className='c-pagination__text'>
        Page {currentPage} de {totalPage}</p>

      <button 
      onClick={next}
      disabled={currentPage===totalPage}>
        &#62;</button>
      <button 
      onClick={nextAll}
      disabled={currentPage===totalPage}>
        |&#62;</button>
    </div>
  );
}

export default Pagination