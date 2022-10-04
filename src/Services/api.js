import Axios from "axios"

export const BASE_URL = 'https://ancient-eyrie-35166.herokuapp.com'

const Client = Axios.create({ baseURL: BASE_URL })


Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

Client.interceptors.response.use(response => response, error => {
  const originalRes = error.config
  if (error.response.status === 401 && error.response.data.code === "token_not_valid") {
    const refreshToken = localStorage.getItem('refresh')
    if (refreshToken) {
      const tokenPieces = JSON.parse(atob(refreshToken.split('.')[1]))
      const now = Math.ceil(Date.now()/1000)
      if (tokenPieces.exp > now) {
        return Client.post('/token/refresh', {refresh: refreshToken}).then((res) => {
          localStorage.setItem('token', res.data.access)
          localStorage.setItem('refresh', res.data.refresh)
          Client.defaults.headers['Authorization'] = "Bearer" + res.data.access
          originalRes.headers['Authorization'] = "Bearer" + res.data.access
          return Client(originalRes)
        }).catch(err => {console.log(err)})
      } else {
        localStorage.clear()
        alert("Refresh Token expired! Will need to log back in.")
      }
    } else {
      alert("No refresh token!")
      localStorage.clear()
    }
  }
  return Promise.reject(error)
})

export default Client