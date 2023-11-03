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
  RESET_FILTER,
  ASC_FILTER,
  DES_FILTER
} from "./types"
import initialState from "./state"
import paramsObject from "./../utils/generateParamsObject"


// Reducer
const reducer = (state= initialState, { type, payload }) => {
  let orderData 

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
    
    case ASC_FILTER:
      // eslint-disable-next-line no-case-declarations
      orderData = [...state.allDogs]
      return {
        ...state,
        dogs: orderData.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // Convertir a mayúsculas para una comparación sin distinción entre mayúsculas y minúsculas
          const nameB = b.name.toUpperCase();
        
          if (nameA < nameB) return -1
          if (nameA > nameB) return 1
          return 0
        })
      }
    case DES_FILTER:
      orderData = [...state.allDogs]
      return {
        ...state,
        dogs: orderData.sort((a, b) => {
          const nameA = a.name.toUpperCase(); // Convertir a mayúsculas para una comparación sin distinción entre mayúsculas y minúsculas
          const nameB = b.name.toUpperCase();
        
          if (nameA > nameB) return -1
          if (nameA < nameB) return 1
          return 0
        })
      }

    default:
      return {...state}
  }
}

export default reducer