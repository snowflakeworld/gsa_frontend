export const ROUTERS = {
  Home: '/',
  SignIn: '/sign',
  Service: '/service',
  Membership: '/membership',
  Shop: '/shop',
  Search: '/search',

  Submission: '/submission',
  CreateSubmission: '/submission/create',

  Account: {
    Home: '/account',
    Security: '/account/security',
    Address: '/account/address',
    Billing: '/account/billing',
    Membership: '/account/membership',
    Submission: '/account/submission',
    TrackOrders: '/account/track-orders',
    OrderDetail: '/account/track-orders/:orderId'
  }
}
