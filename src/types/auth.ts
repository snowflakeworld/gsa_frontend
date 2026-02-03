import { type Email, type User } from './user'

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

export interface CheckEmailRes {
  status: boolean
}

export interface SignInRes {
  user: User
  token: string
}
