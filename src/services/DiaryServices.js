import { RequestAdapter } from "../adapter/RequestAdapter"
import { ENDPOINTS } from "../enums/Endpoints"

/**
 *  Create a diary text 
 */
const create = async (params) => {
  return await RequestAdapter.post(
    `${ENDPOINTS.USER}${ENDPOINTS.DIARY}`,
    params
  )
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

/**
 * Returns a diary text by id
 * @param {number} id 
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
 * Returns all diary texts
 */
const getAll = async () => {
  return await RequestAdapter.get(
    `${ENDPOINTS.USER}${ENDPOINTS.DIARY}`,
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
}

export const DiaryServices = {
  create,
  getAll,
  getById
}