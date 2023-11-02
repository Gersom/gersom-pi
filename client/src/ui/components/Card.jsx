import {
  useNavigate
} from "react-router-dom"
import routerNames from '~common/constants/routes'

const Card = ({
  identification, image, name, temperament, weight
}) => {
  const navigate = useNavigate()
  // const [textSearch, setTextSearch] = useState('');

  const handleDetail = () => {
    navigate(`${routerNames['detail']}/${identification}`);
  }

  return (
    <button className="c-card" onClick={handleDetail}>

      <figure className="c-card__image">
        <img src={image} alt={name} />
      </figure>

      <h3 className="c-card__title">
        {name}</h3>

      <div className="c-card__details">
        <p>Temperamentos : <strong>{temperament}</strong></p>
        <p>Peso : <strong>{weight} kg</strong></p>
      </div>

    </button>
  );
}

export default Card
