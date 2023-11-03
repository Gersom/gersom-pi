// imports
import { 
  ACTIVE_LOADING,
  DISABLED_LOADING,
  GET_DOGS,
  GET_TEMPERAMENTS,
  PAGE_CHANGE,
  DOG_NAME_CHANGE,
  TEMPERAMENT_NAME_CHANGE,
  ORIGIN_FILTER,
  RESET_FILTER
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
          payload,
          state.originSearch
        ),
        currentPage: payload
      }

    case DOG_NAME_CHANGE:
      return {
        ...state,
        params: paramsObject(
          payload,
          state.temperamentNameSearch,
          state.currentPage,
          state.originSearch
        ),
        dogNameSearch: payload
      }
    case TEMPERAMENT_NAME_CHANGE:
      return {
        ...state,
        params: paramsObject(
          state.dogNameSearch,
          payload,
          state.currentPage,
          state.originSearch
        ),
        temperamentNameSearch: payload
      }
    case ORIGIN_FILTER:
      return {
        ...state,
        params: paramsObject(
          state.dogNameSearch,
          state.temperamentNameSearch,
          state.currentPage,
          payload
        ),
        originSearch: payload
      }
    
    case RESET_FILTER:
      return {
        ...state,
        dogs: state.allDogs
      }    

    default:
      return {...state}
  }
}

export default reducer