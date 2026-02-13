import { API_ENDPOINTS } from '@/configs'
import apiRequest from '@/lib/axios'
import { AddressReq, AddressRes } from '@/types'

export const getAddressList = async (): Promise<AddressRes[]> => {
  return apiRequest<AddressRes[]>({
    method: 'GET',
    url: API_ENDPOINTS.ADDRESS.ALL,
    errorMessage: "Address list doesn't exist"
  })
}

export const addAddress = async (data: AddressReq): Promise<AddressRes> => {
  return apiRequest<AddressRes>({
    method: 'POST',
    url: API_ENDPOINTS.ADDRESS.ADD,
    data,
    errorMessage: 'Failed to add address'
  })
}

export const deleteAddress = async (id: string): Promise<AddressRes> => {
  return apiRequest<AddressRes>({
    method: 'POST',
    url: API_ENDPOINTS.ADDRESS.DELETE,
    data: id,
    errorMessage: 'Failed to delete address'
  })
}
