import type Entity from './entity'

export interface User extends Entity {
  email: string
  username: string
}

export interface Email {
  email: string
}

export interface EmailUserName extends Email {
  username: string
}

export interface EmailPassword extends Email {
  password: string
}
