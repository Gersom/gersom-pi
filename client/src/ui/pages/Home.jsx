import { useEffect } from 'react';
import { 
  // useSelector, 
  useDispatch
} from "react-redux";
import {getAllDogs} from "~common/store/action"
const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllDogs())
  }, [dispatch])

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home