import type Entity from './entity'

export interface User extends Entity {
  email: string
  username: string
}

export interface Email {
  email: string
}

export interface Password {
  password: string
}

export interface EmailUserName extends Email {
  username: string
}

export type EmailPassword = Email & Password

export interface AccountRes extends User {
  uid: string
  role: string
  phone: string
  country: string
  avatar: string
}

export interface UpdateAvatarRes {
  avatar: string
}

export interface UpdateProfileReq {
  username: string
  phone: string
  country: string
  avatar: string | null
}

export interface ChangePasswordReq {
  newPassword: string
}

export interface ChangePasswordRes {
  status: boolean
}
