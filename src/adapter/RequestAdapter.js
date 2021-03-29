import axios from 'axios'
import { API_URL } from '@env'
import { SecureStoreAdapter } from './SecureStoreAdapter'

const request = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  }
})

request.interceptors.request.use(
  async config => {
    const token = await SecureStoreAdapter.getItemAsync('_token')
    if (token) {
      config.headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${token}`
      }
    } else {
      config.headers = {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export const RequestAdapter = request