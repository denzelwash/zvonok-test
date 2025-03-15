import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: import.meta.env.VITE_API_KEY,
    units: 'metric',
    lang: 'ru',
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('API error: ', error.message)
    return Promise.reject(error)
  },
)

export default api
