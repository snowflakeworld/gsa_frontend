import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth'
import submission from './submission'

const reducer = combineReducers({
  auth,
  submission
})

export default reducer
