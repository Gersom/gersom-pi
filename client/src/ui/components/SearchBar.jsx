import { useState, useEffect } from 'react'

const SearchBar = ({
  titleName='', onSearch= ()=>null, onNull= ()=>null
}) => {
  const [textSearch, setTextSearch] = useState('');
  
  const handleChange = (value) => {
    setTextSearch(value)
  }

  useEffect(() => {
    onNull()
  }, [onNull, textSearch])

  return (
    <div className="c-search">
      <h3 className='c-search__title'>
        {titleName}</h3>

      <input
        id="input-search"
        placeholder='Buscar'
        className="c-search__input"
        value={textSearch}
        onChange={e => handleChange(e.target.value)}
        type='search' />
      

      <button 
        className="c-search__button" 
        onClick={() => onSearch(textSearch)}
      >
        Buscar</button>

    </div>
  );
}

export default SearchBar
