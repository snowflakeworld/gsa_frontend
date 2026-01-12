import { routers } from '@/configs'
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
  { path: routers.Account.Home, element: <AccountHomePage /> },
  { path: routers.Account.Security, element: <AccountSecurityPage /> },
  { path: routers.Account.Address, element: <AccountAddressPage /> },
  { path: routers.Account.Billing, element: <AccountBillingPage /> },
  { path: routers.Account.Membership, element: <AccountMembershipPage /> },
  { path: routers.Account.Submission, element: <AccountSubmissionPage /> },
  { path: routers.Account.TrackOrders, element: <AccountTrackOrdersPage /> },
  { path: routers.Account.OrderDetail, element: <AccountOrderDetailPage /> }
]
