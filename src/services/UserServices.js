import { APIServices } from "./APIServices"
import { ENDPOINTS } from "./enums/Endpoints"

/**
 * Save image profile
 * @param {file} image 
 */
const _getFormData = (params) => {
  let filename = params.image.split('/').pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append('image', {
    uri: params.image,
    name: filename,
    type
  });
  formData.append('name', params.name)
  formData.append('email', params.email)
  formData.append('profession', params.profession)
  formData.append('password', params.password)

  return formData
}

const create = async (params) => {
  const formData = _getFormData(params)

  console.log(formData)
  return await APIServices.post(
    ENDPOINTS.USER,
    formData,
    {
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    }
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

const getById = async (id) => {
  return await APIServices.get(
    `${ENDPOINTS.USER}/${id}`,
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
  getById
}