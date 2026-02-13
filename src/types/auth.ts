import { EmailPassword, type Email, type User } from './user'

export interface AuthState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
}

export interface CreateInfo extends Email {
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
}

export interface SignUpReq extends EmailPassword {
  name: string
}

export interface SignInRes {
  user: User
  token: string
}

export interface SignUpRes {
  status: boolean
  _id: string
  email: string
  username: string
  createdAt: string
  updatedAt: string
}
