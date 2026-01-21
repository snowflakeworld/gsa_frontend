import { lazy } from 'react'

import { ROUTERS } from '@/configs'

const AccountAddressPage = lazy(() => import('@/pages/Account/AccountAddress'))
const AccountBillingPage = lazy(() => import('@/pages/Account/AccountBilling'))
const AccountHomePage = lazy(() => import('@/pages/Account/AccountHome'))
const AccountMembershipPage = lazy(() => import('@/pages/Account/AccountMembership'))
const AccountOrderDetailPage = lazy(() => import('@/pages/Account/AccountOrderDetail'))
const AccountSecurityPage = lazy(() => import('@/pages/Account/AccountSecurity'))
const AccountSubmissionPage = lazy(() => import('@/pages/Account/AccountSubmission'))
const AccountTrackOrdersPage = lazy(() => import('@/pages/Account/AccountTrackOrders'))

export const AccountRoutes = [
  { path: ROUTERS.Account.Home, element: <AccountHomePage /> },
  { path: ROUTERS.Account.Security, element: <AccountSecurityPage /> },
  { path: ROUTERS.Account.Address, element: <AccountAddressPage /> },
  { path: ROUTERS.Account.Billing, element: <AccountBillingPage /> },
  { path: ROUTERS.Account.Membership, element: <AccountMembershipPage /> },
  { path: ROUTERS.Account.Submission, element: <AccountSubmissionPage /> },
  { path: ROUTERS.Account.TrackOrders, element: <AccountTrackOrdersPage /> },
  { path: ROUTERS.Account.OrderDetail, element: <AccountOrderDetailPage /> }
]
