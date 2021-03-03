import { APIServices } from "./APIServices"
import { ENDPOINTS } from "./enums/Endpoints"

/**
 * Save image profile
 * @param {file} image 
 */
const _saveImage = (image) => {
  APIServices.post(
    ENDPOINTS.USER,
    { image }
  )
}

const create = (params) => {
  APIServices.post(
    ENDPOINTS.USER,
    params
  )
}

const update = (params) => {
  APIServices.put(
    ENDPOINTS.USER,
    params
  )
}

const get = async (id) => {
  return await APIServices.get(
    ENDPOINTS.USER,
    { params: { id } }
  )
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

export const UserServices = {
  create,
  update,
  get
}