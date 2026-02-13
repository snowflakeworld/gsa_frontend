export const API_ENDPOINTS = {
  AUTH: {
    CHECK_EMAIL: 'auth/check-email',
    SIGN_IN: 'auth/sign-in',
    SIGN_UP: 'auth/sign-up',
    SIGN_OUT: 'auth/sign-out'
  },
  ADDRESS: {
    ALL: 'address/all',
    ADD: 'address/add',
    UPDATE: 'address/update',
    DELETE: 'address/delete'
  },
  COLLECTABLE: {
    SEARCH: 'collectable/search',
    SEARCH_BY_ID: (uid: string) => `collectable/search/${uid}`,
    CARD_DETAIL: (cert: string) => `collectable/card-detail/${cert}`,
    MOCK: 'collectable/mock'
  },
  MEMBERSHIP: {
    CURRENT: 'membership/current',
    UPDATE: 'membership/update'
  },
  ACCOUNT: {
    PROFILE: 'user/profile',
    UPDATE: 'user/update',
    UPLOAD_AVATAR: 'user/upload-avatar'
  }
}
