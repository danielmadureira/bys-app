import { APIServices } from "./APIServices"
import { ENDPOINTS } from "./enums/Endpoints"
import { SecureStoreServices } from "./SecureStoreServices"

const authenticate = async (params) => {
  return await APIServices.post(
    `${ENDPOINTS.AUTHENTICATE}`,
    params
  )
    .then(res => {
      return res.data
    })
}

const unauthenticate = async (params) => {
  return await APIServices.post(
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
  return SecureStoreServices.getItemAsync('_token') ?
    true : false
}

export const AuthServices = {
  authenticate,
  unauthenticate,
  isAuthenticated
}