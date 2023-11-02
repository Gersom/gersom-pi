import { useNavigate } from "react-router-dom";
import routerNames from '~common/constants/routes'
import pugDog from '~images/pug-dog-logo.png'
import dogBackgroung from '~images/dog-backgroung.png'

const Start = () => {
  const navigate = useNavigate()

  return (
    <div className="Start" >
      <figure className="Start__background">
        <img src={dogBackgroung} 
        className="logo" alt="pug dog logo" />
      </figure>
      <div className="Start__image">
        <a href="#" target="_blank" rel="pug dog">
          <img src={pugDog} className="logo" alt="pug dog logo" />
        </a>
      </div>
      <h1>DOGS PAGE</h1>
      <div className="card">
        <button onClick={() => navigate(routerNames['home'])}
        style={{position:'relative'}}>
          Home</button>
        <p>
        <code>Proyecto final de</code> SoyHenry.
        </p>
      </div>
      <p className="read-the-docs">
        Este es un proyecto creado con Vite & React.
      </p>
    </div>
  );
};

export default Start