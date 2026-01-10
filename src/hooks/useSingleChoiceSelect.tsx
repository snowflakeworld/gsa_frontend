import { dispatch, select, useSelector } from '@/store'
import { createContext, FC, ReactNode, useContext } from 'react'

export const useSingleChoiceSelect = () => {
  const { curIdx } = useSelector(state => state.submission)

  const selectIdx = (idx: number) => {
    dispatch(select({ idx: idx }))
  }

  return { curIdx, selectIdx }
}

const SingleChoiceSelectContext = createContext<ReturnType<typeof useSingleChoiceSelect> | null>(null)

export const SingleChoiceSelectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = useSingleChoiceSelect()

  return <SingleChoiceSelectContext.Provider value={value}>{children}</SingleChoiceSelectContext.Provider>
}

export const useSingChoiceSelectContext = () => {
  const context = useContext(SingleChoiceSelectContext)
  if (!context) throw new Error('useSingChoiceSelectContext must be used within a SingleChoiceSelectProvider')

  return context
}
