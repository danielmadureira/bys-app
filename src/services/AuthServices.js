import { RequestAdapter } from "../adapter/RequestAdapter"
import { ENDPOINTS } from "../enums/Endpoints"

/**
 * Log user into 
 * application
 * 
 * @param {object} params 
 * @returns 
 */
const authenticate = async (params) => {
  return await RequestAdapter.post(
    `${ENDPOINTS.AUTHENTICATE}`,
    params
  )
    .then(res => {
      return res.data
    })
}

/**
 * Logout user 
 * of application
 * 
 * @param {object} params 
 * @returns 
 */
const unauthenticate = async (params) => {
  return await RequestAdapter.post(
    ENDPOINTS.UNAUTHENTICATE,
    params
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
}

export const AuthServices = {
  authenticate,
  unauthenticate
}