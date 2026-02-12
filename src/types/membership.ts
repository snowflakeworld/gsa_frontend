import Entity from './entity'

export type PeriodType = 'year' | 'month'

export const MembershipTypes = ['bronze', 'silver', 'gold'] as const

export type MembershipType = (typeof MembershipTypes)[number]

export interface MembershipRes extends Entity {
  user: string
  type: MembershipType
  point: number
  deadline: Date | string
}

export interface MembershipUpdateReq {
  type: MembershipType
  period: PeriodType
  amount: number
  token: string
}
