const Filters = ({
  itemsList= [],
  onTemperament= ()=>null,
  onOrigin= ()=>null,
  onOrder= ()=>null,
  tempValue,
  originValue,
  orderValue
}) => {
  return (
    <div className='c-filters'>
      <span>Temperamentos: </span>
      <select onChange={onTemperament} value={tempValue} name="select">
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
      <span>Origen: </span>
      <select onChange={onOrigin} value={originValue} name="select">
        <option value={''}>
          Ninguno
        </option>
        <option value={'database'}>
          Base de datos
        </option>
        <option value={'dogapi'}>
          The Dog Api
        </option>
      </select>

      <span>Ordenar por: </span>
      <select onChange={onOrder} value={orderValue} name="select">
        <option value={''}>
          Ninguno
        </option>
        <option value={'asc'}>
          A - Z
        </option>
        <option value={'des'}>
          Z - A
        </option>
      </select>
    </div>
  );
}

export default Filters