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

const unauthenticate = (params) => {
  return APIServices.post(
    ENDPOINTS.UNAUTHENTICATE,
    params
  )
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