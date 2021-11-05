import axios from 'axios'
import { UserList } from '../interfaces/UserList'

interface GetAllUsersProps {
  page: number
}

const API = axios.create({
  baseURL: 'https://reqres.in/api'
})

export const getAllUsers = async ({ page }: GetAllUsersProps) => {
  const res = await API.get<UserList>('/users', { params: { page } })
  return res.data
}
