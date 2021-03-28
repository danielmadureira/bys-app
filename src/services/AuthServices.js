import { RequestAdapter } from "../adapter/RequestAdapter"
import { SecureStoreAdapter } from "../adapter/SecureStoreAdapter"
import { ENDPOINTS } from "../enums/Endpoints"

const authenticate = async (params) => {
  return await RequestAdapter.post(
    `${ENDPOINTS.AUTHENTICATE}`,
    params
  )
    .then(res => {
      return res.data
    })
}

const unauthenticate = async (params) => {
  return await RequestAdapter.post(
    ENDPOINTS.UNAUTHENTICATE,
    params
  )
    .then(res => {
      console.log(res, 'login')
      return res.data
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

const isAuthenticated = () => {
  return SecureStoreAdapter.getItemAsync('_token') ?
    true : false
}

export const AuthServices = {
  authenticate,
  unauthenticate,
  isAuthenticated
}