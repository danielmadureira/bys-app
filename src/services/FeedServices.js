import { APIServices } from "./APIServices"
import { ENDPOINTS } from "./enums/Endpoints"

/**
 * Returns a feed by id
 * @param {number} id 
 */
const getById = async (id) => {
  return await APIServices.get(
    `${ENDPOINTS.FEED}/${id}`
  )
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

/**
 * Returns all feed
 */
const getAll = async () => {
  return await APIServices.get(
    `${ENDPOINTS.FEED}`,
  )
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

export const FeedServices = {
  getAll,
  getById
}