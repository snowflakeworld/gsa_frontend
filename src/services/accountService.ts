import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import { AccountRes, ChangePasswordReq, SuccessRes, UpdateProfileReq } from '@/types'

export const getProfile = async () => {
  return apiRequest<AccountRes>({
    method: 'GET',
    url: API_ENDPOINTS.ACCOUNT.PROFILE,
    errorMessage: "Account doesn't exist"
  })
}

export const updateProfile = async (data: UpdateProfileReq) => {
  return apiRequest<AccountRes>({
    method: 'POST',
    url: API_ENDPOINTS.ACCOUNT.UPDATE,
    data,
    errorMessage: 'Failed to update profile'
  })
}

export const changePassword = async (data: ChangePasswordReq) => {
  return apiRequest<SuccessRes>({
    method: 'PUT',
    url: API_ENDPOINTS.ACCOUNT.CHANGE_PASSWORD,
    data,
    errorMessage: 'Failed to change password'
  })
}
