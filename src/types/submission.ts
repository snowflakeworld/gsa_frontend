export interface SubmissionState {
  gradingIdx: number
  serviceLevelIdx: number
  membershipIdx: number
  shippingAddressIdx: number
  shippingMethodIdx: number
  shippingPaymentIdx: number
}

export interface NewAddressType {
  country: string
  proBox: string
  apartment: string
  city: string
  province: string
  zipCode: string
  phoneNumber: string
  isDefault: boolean
}
