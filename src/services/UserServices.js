import { APIServices } from "./APIServices"
import { ENDPOINTS } from "./enums/Endpoints"

/**
 * Save image profile
 * @param {file} image 
 */
const _getFormData = async (uri) => {
  let filename = uri.split('/').pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append('profile_picture', { 
    uri: uri, 
    name: filename, 
    type 
  });
  
  return formData
}

const create = async (params) => {
  return await APIServices.post(
    ENDPOINTS.USER,
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
  get,
  saveImage
}