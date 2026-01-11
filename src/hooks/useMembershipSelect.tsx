import { dispatch, updateMembership, useSelector } from '@/store'
import { createContext, FC, ReactNode, useContext } from 'react'

export const useMembershipSelect = () => {
  const { membershipIdx } = useSelector(state => state.submission)

  const selectIdx = (idx: number) => {
    dispatch(updateMembership({ membershipIdx: idx }))
  }

  return { membershipIdx, selectIdx }
}

const MembershipSelectContext = createContext<ReturnType<typeof useMembershipSelect> | null>(null)

export const MembershipSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useMembershipSelect()

  return <MembershipSelectContext.Provider value={value}>{children}</MembershipSelectContext.Provider>
}

export const useMembershipSelectContext = () => {
  const context = useContext(MembershipSelectContext)
  if (!context) throw new Error('useMembershipSelectContext must be used within a MembershipSelectProvider')

  return context
}
