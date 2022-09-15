import Client from "./api";

export const LoginUser = async (data) => {
  try {
    localStorage.clear()
    let res = await Client.post('/api/token', data)
    localStorage.setItem('token', res.data.access)
    localStorage.setItem('refresh', res.data.refresh)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignUpUser = async (data) => {
  try {
    let res = await Client.post(`/api/users`, data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckLogin = async () => {
  let access = localStorage.getItem('token')
  try {
    const res = await Client.post('/api/token/verify', {token: access})
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LogOut = () => {
  // write functions to reset the appropraite state values
  localStorage.clear()
}