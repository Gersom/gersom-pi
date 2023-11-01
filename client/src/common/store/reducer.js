// imports
import { 
  ACTIVE_LOADING,
  DISABLED_LOADING,
  GET_ALL_DOGS,
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

    case GET_ALL_DOGS:
      return { ...state, dogs: payload }

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