import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import { CheckEmailRes, Email, EmailPassword, SignInRes } from '@/types'

export const checkEmail = async (data: Email): Promise<CheckEmailRes> => {
  return apiRequest<CheckEmailRes>({
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
