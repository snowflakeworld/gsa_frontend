import { ROUTERS } from '@/configs'
import {
  AccountAddressPage,
  AccountBillingPage,
  AccountHomePage,
  AccountMembershipPage,
  AccountOrderDetailPage,
  AccountSecurityPage,
  AccountSubmissionPage,
  AccountTrackOrdersPage
} from '@/pages/Account'

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
