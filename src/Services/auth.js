import Client from "./api";
import { useDispatch } from "react-redux";
import { getUser } from "../store/reducers/userSlice";

export const LoginUser = async (data) => {
  try {
    localStorage.clear()
    let res = await Client.post('/token', data)
    localStorage.setItem('token', res.data.access)
    localStorage.setItem('refresh', res.data.refresh)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SignUpUser = async (data) => {
  try {
    let res = await Client.post(`/users`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckLogin = async () => {
  let access = localStorage.getItem('token')
  try {
    const res = await Client.post('/token/verify', {token: access})
    return res.data
  } catch (error) {
    throw error
  }
}

export const LogOut = () => {
  localStorage.clear()
  const dispatch = useDispatch()
  dispatch(getUser(""))
}