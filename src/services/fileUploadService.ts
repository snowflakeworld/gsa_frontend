import { API_ENDPOINTS } from '@/configs'
import fileUploadRequest from '@/lib/file-upload'
import { UpdateAvatarRes } from '@/types'

export const uploadAvatar = async (formData: FormData): Promise<UpdateAvatarRes> => {
  console.log(formData)

  return fileUploadRequest<UpdateAvatarRes>({
    method: 'POST',
    url: API_ENDPOINTS.ACCOUNT.UPLOAD_AVATAR,
    errorMessage: 'Upload avatar failed',
    formData
  })
}
