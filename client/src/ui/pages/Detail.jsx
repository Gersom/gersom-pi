import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()

  return (
    <div>
      <h2>Detail</h2>
      <p>Id: { id }</p>
    </div>
  );
};

export default Detail