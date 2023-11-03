// imports
import { 
  ACTIVE_LOADING,
  DISABLED_LOADING,
  GET_DOGS,
  GET_TEMPERAMENTS,
  PAGE_CHANGE,
  DOG_NAME_CHANGE,
  TEMPERAMENT_NAME_CHANGE
} from "./types"
import initialState from "./state"
import paramsObject from "./../utils/generateParamsObject"


// Reducer
const reducer = (state= initialState, { type, payload }) => {
  switch(type) {
    case ACTIVE_LOADING:
      return {
        ...state, loading: true
      }
    case DISABLED_LOADING:
      return {
        ...state, loading: false
      }

    case GET_DOGS:
      return { 
        ...state, 
        dogs: payload.results,
        allDogs: payload.results,
        currentPage: payload?.info?.currentPage,
        totalPage: payload?.info?.pages,
      }
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload
      }

    case PAGE_CHANGE:
      return {
        ...state,
        params: paramsObject(
          state.dogNameSearch,
          state.temperamentNameSearch,
          payload
        ),
        currentPage: payload
      }

    case DOG_NAME_CHANGE:
      return {
        ...state,
        params: paramsObject(
          payload,
          state.temperamentNameSearch,
          state.currentPage
        ),
        dogNameSearch: payload
      }
    case TEMPERAMENT_NAME_CHANGE:
      return {
        ...state,
        params: paramsObject(
          state.dogNameSearch,
          payload,
          state.currentPage
        ),
        temperamentNameSearch: payload
      }

    

    

    default:
      return {...state}
  }
}

export default reducer