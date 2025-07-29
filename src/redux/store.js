import { combineReducers, configureStore } from '@reduxjs/toolkit'
import customerReducer from './user/customer'
import adminReducer from './user/admin'
import exampleReducer from './exampleSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import localforage from 'localforage'

const rootReducer = combineReducers({
  customer: customerReducer,
  admin: adminReducer,
  example: exampleReducer,
})

const persistConfig = {
  key: 'wasifs-heaven',
  storage: localforage, // IndexedDB
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)