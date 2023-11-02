import axios from "axios"

import {
  API_URL_DOGS, API_URL_DOGS_NAME
} from "~common/constants/api"

import { 
  ACTIVE_LOADING,
  DISABLED_LOADING,
  PAGE_CHANGE,
  SEARCH_CHANGE,
  GET_DOGS,
} from "./types"

export const activateLoading = () => {
  return { type: ACTIVE_LOADING }
}
export const disabledLoading = () => {
  return { type: DISABLED_LOADING }
}

export const pageChange = () => {
  return { type: PAGE_CHANGE }
}
export const searchChange = (txt) => {
  return { type: SEARCH_CHANGE, payload: txt }
}

export const getAllDogs = (page= 1) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: API_URL_DOGS,
        params: { page }
      })
      return dispatch({ type: GET_DOGS, payload: data })
    } 
    catch (error) {
      console.error(error)
    }
  }
}

export const getNameDogs = (name='', page= 1) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: API_URL_DOGS_NAME,
        params: { search: name, page }
      })
      return dispatch({ type: GET_DOGS, payload: data })
    } 
    catch (error) {
      console.error(error)
    }
  }
}