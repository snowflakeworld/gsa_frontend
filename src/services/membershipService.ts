import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import { MembershipRes } from '@/types'

export const getCurrentMembership = async (): Promise<MembershipRes> => {
  return apiRequest<MembershipRes>({
    method: 'GET',
    url: API_ENDPOINTS.MEMBERSHIP.CURRENT,
    errorMessage: "Membership doesn't exist"
  })
}
