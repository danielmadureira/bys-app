import { RequestAdapter } from "../adapter/RequestAdapter"
import { ENDPOINTS } from "../enums/Endpoints"

/**
 * Returns details 
 * of feed by id
 * 
 * @param {number} id 
 * @returns {Promise}
 */
const getById = async (id) => {
  return await RequestAdapter.get(
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
 * 
 * @returns {Promise}
 */
const getAll = async (page) => {
  return await RequestAdapter.get(
    `${ENDPOINTS.FEED}`,
    {
      params: {
        page: page
      }
    }
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