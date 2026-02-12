import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import { MembershipRes, MembershipUpdateReq } from '@/types'

export const getCurrentMembership = async (): Promise<MembershipRes> => {
  return apiRequest<MembershipRes>({
    method: 'GET',
    url: API_ENDPOINTS.MEMBERSHIP.CURRENT,
    errorMessage: "Membership doesn't exist"
  })
}

export const updateMembership = async (data: MembershipUpdateReq): Promise<MembershipRes> => {
  return apiRequest<MembershipRes>({
    method: 'POST',
    url: API_ENDPOINTS.MEMBERSHIP.UPDATE,
    data,
    errorMessage: 'Update failed'
  })
}
