import Entity from './entity'

export interface AddressRes extends Entity {
  uid: string
  country: string
  state: string
  city: string
  street: string
  code: string
  phone: string
}

export type AddressReq = Omit<AddressRes, '_id' | 'uid' | 'createdAt' | 'updatedAt'>
