import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { requestApi } from "./rtqRequests";
import AuthSlice from "./Slice/authSlice";

const reducer = {
  [requestApi.reducerPath]: requestApi.reducer,
  AuthSlice,
};

export const store = configureStore({
  reducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(requestApi.middleware),
});

// configure listeners using the provided defaults

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
