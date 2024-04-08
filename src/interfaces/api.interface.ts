import { IUser } from './common.interface'

export interface IApiResponse {
  statusCode: number
  message: string
  error?: string
}

export interface IApiRole {
  id: string
  name: string
}

export interface ILoginData {
  email: string
  id: string
  role: IApiRole
  token: string
}

export interface ILoginResponse extends IApiResponse {
  data: ILoginData
}

export interface Pagination {
  totalCount: number
  totalPages: number
}

export interface IUserListData extends IApiResponse {
  data: IUser[]
  pagination: Pagination
}

export interface IUserListApi {
  data: IUserListData
}
