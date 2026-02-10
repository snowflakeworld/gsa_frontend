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
