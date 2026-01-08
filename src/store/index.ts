import { STORE_KEY } from '@/configs'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers'

type RootState = ReturnType<typeof reducers>

const persistConfig = {
  key: STORE_KEY,
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

type AppDispatch = typeof store.dispatch

export const persister = persistStore(store)
export const dispatch = store.dispatch
export const useDispatch = () => useAppDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector

export * from './reducers/auth'
