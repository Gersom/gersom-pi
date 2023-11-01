import axios from "axios"

import {
  API_URL_DOGS
} from "~common/constants/api"

import { 
  ACTIVE_LOADING,
  DISABLED_LOADING,
  GET_ALL_DOGS,
} from "./types"

export const activateLoading = () => {
  return { type: ACTIVE_LOADING }
}
export const disabledLoading = () => {
  return { type: DISABLED_LOADING }
}

export const getAllDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: API_URL_DOGS,
      })
      return dispatch({ type: GET_ALL_DOGS, payload: data })
    } 
    catch (error) {
      console.error(error)
    }
  }
}