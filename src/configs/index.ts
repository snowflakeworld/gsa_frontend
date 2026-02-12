export const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8011'
export const STORE_KEY = process.env.REACT_APP_STORE_KEY || 'app_store'
export const STRIPE_PUBLISH_KEY = process.env.STRIPE_PUBLISH_KEY || 'pk_test_123123123123123123123123123123123213123123123eeeeeeeeee'

export * from './navigation'
export * from './endpoints'