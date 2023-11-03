const Filters = ({
  itemsList= [],
  onTemperament= ()=>null,
  currentValue
}) => {
  return (
    <div className='c-filters'>
      <select onChange={onTemperament} value={currentValue} name="select">
        <option value={''}>
          Ninguno
        </option>
        {
          itemsList.map((ele) => (
            <option value={ele.name} key={ele.id}>
              {ele.name}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Filters