// Imports React
import { useEffect } from 'react';

// Imports Store
import { 
  useSelector, 
  useDispatch
} from "react-redux";

// Common
import {activateLoading} from "~common/store/action"
import routerNames from '~common/constants/routes'

// Imports Router
import { 
  Routes, 
  Route, 
} from "react-router-dom";

// Imports Pages
import Start from "./pages/Start";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";

// Imports Components
// import SearchBar from "./components/SearchBar";

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(
    (state) => state.loading
  )

  useEffect(() => {
    setTimeout(function() {
      dispatch(activateLoading())
    }, 1000)
  }, [dispatch])

  const AllRoutes = (
    <Routes>
      {/* Start */}
      <Route 
        path={routerNames['start']}
        element={ <Start /> }
      />

      {/* Home */}
      <Route 
        path={routerNames['home']}
        element={ <Home /> }
      />

      {/* Detail */}
      <Route 
        path={`${routerNames['detail']}/:id`}
        element={ <Detail /> }
      />

      {/* Create */}
      <Route 
        path={routerNames['create']}
        element={ <Create /> }
      />

      {/* Not Found 404 */}
      <Route 
        path={'*'}
        element={ <NotFound /> }
      />
    </Routes>
  )

  return (
    <div className="App">
      {
        !isLoading 
        ? <div>Loading...</div>
        : AllRoutes
      }
    </div>
  )
}

export default App
