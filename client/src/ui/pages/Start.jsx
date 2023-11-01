import { useNavigate } from "react-router-dom";
import routerNames from '~common/constants/routes'
import pugDog from '~images/pug-dog-logo.png'
import dogBackgroung from '~images/dog-backgroung.png'

const Start = () => {
  const navigate = useNavigate()
  const styleImage = {
    position: 'absolute',
    top: '0',
    left: '-23px',
    width: '100vw',
    zIndex: '0'
  }
  const styleImg = {
    display: 'block',
    height: 'auto',
    width: '100%',
    opacity: '.1'
  }
  const styleContent = {
    position: 'relative',
    zIndex: '2'
  }

  return (
    <div className="Start" >
      <div style={styleImage}>
        <img src={dogBackgroung} 
        style={styleImg}
        className="logo" alt="pug dog logo" />
      </div>
      <div style={styleContent}>
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