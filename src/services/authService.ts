import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import type { Email, EmailPassword, SignInRes, SignUpReq, SignUpRes, SuccessRes } from '@/types'

export const checkEmail = async (data: Email): Promise<SuccessRes> => {
  return apiRequest<SuccessRes>({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.CHECK_EMAIL,
    data,
    errorMessage: 'Login failed'
  })
}

export const signIn = async (data: EmailPassword): Promise<SignInRes> => {
  return apiRequest<SignInRes>({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.SIGN_IN,
    data,
    errorMessage: 'Login failed'
  })
}

export const signUp = async (data: SignUpReq): Promise<SignUpRes> => {
  return apiRequest<SignUpRes>({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.SIGN_UP,
    data,
    errorMessage: 'Sign up failed'
  })
}
