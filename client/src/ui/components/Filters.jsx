import { useState } from 'react';

const Filters = ({
  onTemperament= ()=>null
}) => {
  const [currentValue, setCurrentValue] = useState('')

  const optionSelect = (value, text) => {
    return <option value={value}>
      {text}
    </option>
  }

  const handleSelect = (event) => {
    setCurrentValue(event.target.value)
    onTemperament(event.target.value)
  }

  return (
    <div className='c-filters'>
        <select onChange={handleSelect}
        value={currentValue} name="select">
          {optionSelect('pepe', 'Pepe')}
          {optionSelect('pepe2', 'Pepe 2', false)}
          {optionSelect('pepe3', 'Pepe 3', false)}
        </select>
    </div>
  );
}

export default Filters