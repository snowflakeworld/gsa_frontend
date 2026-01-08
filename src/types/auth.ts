import { User } from './user'

export interface AuthState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
}
