import { configureStore } from "@reduxjs/toolkit";
import  products from './ProductSlice'
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
  import storage from 'redux-persist/lib/storage'
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
const persistedReducer = persistReducer(persistConfig, products)

export const store = configureStore({
    reducer: {products:persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
 export let persistor = persistStore(store)
 
