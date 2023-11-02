// imports
import { 
  ACTIVE_LOADING,
  DISABLED_LOADING,
  PAGE_CHANGE,
  SEARCH_CHANGE,
  GET_DOGS,
} from "./types"
import initialState from "./state"


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

    case PAGE_CHANGE:
      return {
        ...state,
        currentPage: payload
      }

    case SEARCH_CHANGE:
        return {
          ...state,
          searchText: payload
        }

    case GET_DOGS:
      return { 
        ...state, 
        dogs: payload.results,
        currentPage: payload?.info?.currentPage,
        totalPage: payload?.info?.pages,
      }

    // case ADD_ITEM:
    //   return {
    //     ...state,
    //     items: [...state.items, payload]
    //   }

    default:
      return {...state}
  }
}

export default reducer