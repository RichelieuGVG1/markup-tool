import axios from 'axios'

// export const API_URL = import.meta.env.API_URL

export const $api = axios.create({
  withCredentials: true,
  baseURL: __API__,
  headers: {
    'Content-type': 'application/json'
  }
})

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//   return config
// })

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    console.log(originalRequest)

    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true
      try {
        await axios.post(`${__API__}/users/refresh`, {}, { withCredentials: true })
        return $api.request(originalRequest)
      } catch (e) {
        console.log('Unauthorised')
      }
    }
    throw error
  }
)
export default $api
