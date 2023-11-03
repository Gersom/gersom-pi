import axios from "axios"

import {
  API_URL_DOGS,
  API_URL_TEMPS
} from "~common/constants/api"

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

export const activateLoading = () => {
  return { type: ACTIVE_LOADING }
}
export const disabledLoading = () => {
  return { type: DISABLED_LOADING }
}

export const pageChange = (data) => {
  return { type: PAGE_CHANGE, payload: data}
}
export const dogNameChange = (data) => {
  return { type: DOG_NAME_CHANGE, payload: data }
}
export const temperamentNameChange = (data) => {
  return { type: TEMPERAMENT_NAME_CHANGE, payload: data }
}
export const originFilter = (data) => {
  return { type: ORIGIN_FILTER, payload: data }
}

export const getDogs = (params) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: API_URL_DOGS,
        params
      })
      return dispatch({ type: GET_DOGS, payload: data })
    } 
    catch (error) {
      console.error(error)
    }
  }
}

export const getAllTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: API_URL_TEMPS
      })
      return dispatch({ 
        type: GET_TEMPERAMENTS, payload: data 
      })
    } 
    catch (error) {
      console.error(error)
    }
  }
}

export const resetFilter = () => {
  return { type: RESET_FILTER}
}