
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { requestApi } from './rtqRequests'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [requestApi.reducerPath]: requestApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware),
})

// configure listeners using the provided defaults


setupListeners(store.dispatch)