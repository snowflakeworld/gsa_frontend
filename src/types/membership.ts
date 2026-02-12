import Entity from './entity'

export type MembershipType = 'bronze' | 'silver' | 'gold'

export interface MembershipRes extends Entity {
  user: string
  type: MembershipType
  point: number
  deadline: Date | string
}
