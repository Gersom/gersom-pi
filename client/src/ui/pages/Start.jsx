import { useNavigate } from "react-router-dom";
import routerNames from '~common/constants/routes'
import reactLogo from '~icons/react.svg'
import viteLogo from '~icons/vite.svg'

const Start = () => {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>DOGS PAGE</h1>
      <div className="card">
        <button onClick={() => navigate(routerNames['home'])}>
          Home</button>
        <p>
        <code>Proyecto final de</code> SoyHenry.
        </p>
      </div>
      <p className="read-the-docs">
        Este es un proyecto creado con Vite & React.
      </p>
    </>
  );
};

export default Start