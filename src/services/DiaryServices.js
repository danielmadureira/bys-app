import { RequestAdapter } from "../adapter/RequestAdapter"
import { ENDPOINTS } from "../enums/Endpoints"

/**
 * Create an account
 * 
 * @param {object} params 
 * @returns {Promise} 
 */
const create = async (params) => {
  return await RequestAdapter.post(
    `${ENDPOINTS.USER}${ENDPOINTS.DIARY}`,
    params
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.response.data
    })
}

/**
 * Returns a diary 
 * text by id
 * 
 * @param {number} id 
 * @returns {Promise} 
 */
const getById = async (id) => {
  return await RequestAdapter.get(
    `${ENDPOINTS.USER}${ENDPOINTS.DIARY}/${id}`
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
}

/**
 * Returns all 
 * diary texts 
 * 
 * @returns {Promise}
 */
const getAll = async () => {
  return await RequestAdapter.get(
    `${ENDPOINTS.USER}${ENDPOINTS.DIARY}`,
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.response.data
    })
}

export const DiaryServices = {
  create,
  getAll,
  getById
}