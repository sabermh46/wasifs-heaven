import axios from 'axios'

const axiosBase = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:4007/api',
  withCredentials: true,
})

export default axiosBase
