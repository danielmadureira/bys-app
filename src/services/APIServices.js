import axios from 'axios'
import { API_URL } from '@env'
import { SecureStoreServices } from './SecureStoreServices'

const request = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

request.interceptors.request.use(
  async config => {
    const token = await SecureStoreServices.getItemAsync('_token')
    if (token) {
      config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${token}`
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export const APIServices = request