import { RequestAdapter } from "../adapter/RequestAdapter";
import { ENDPOINTS } from "../enums/Endpoints"

/**
 * Converte form
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

  return await RequestAdapter.post(
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

/**
 * Update personal data of user
 * 
 * @param {object} params 
 */
const update = async (params) => {
  return await RequestAdapter.put(
    ENDPOINTS.USER,
    params
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.response.data
    })
}

/**
 * Update mood of user
 * 
 * @param {object} params 
 */
const updateMood = async (params) => {
  return await RequestAdapter.put(
    ENDPOINTS.MOOD,
    params
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.response.data
    })
}

/**
 * Converet image profile
 * in Form Data
 * 
 * @param {file} image 
 */
const _getFile = (image) => {
  let filename = image.split('/').pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append('image', {
    uri: image,
    name: filename,
    type
  });

  return formData
}

/**
 * Update profile image of user
 * 
 * @param {file} image 
 */
const updateFile = async (image) => {
  let formData = _getFile(image)
  return await RequestAdapter.post(
    ENDPOINTS.USER_IMAGE,
    formData,
    {
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    }
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err.response.data
    })
}

const get = async (id) => {
  return await RequestAdapter.get(
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

const getMood = async () => {
  return await RequestAdapter.get(
    ENDPOINTS.MOOD
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
}

const getById = async (id) => {
  return await RequestAdapter.get(
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
  get,
  getById,
  getMood,
  update,
  updateFile,
  updateMood,
}