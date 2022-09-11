import Client from "./api";

export const LoginUser = async (data) => {
  try {
    let res = await Client.post('/api/user/login', data)
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
  try {
    const res = await Client.get('/api/obtain')
    return res.data
  } catch (error) {
    throw error
  }
}

export const LogOut = () => {
  // write functions to reset the appropraite state values
  localStorage.clear()
}