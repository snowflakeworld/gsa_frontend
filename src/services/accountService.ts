import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import { AccountRes, UpdateProfileReq } from '@/types'

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
