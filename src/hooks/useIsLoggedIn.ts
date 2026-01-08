import { useSelector } from '@/store'

export function useIsLoggedIn(): boolean {
  const { isLoggedIn } = useSelector(store => store.auth)

  return isLoggedIn
}
