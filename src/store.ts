import { configureStore } from "@reduxjs/toolkit";
import { baseService } from "./services";
import { setupListeners } from "@reduxjs/toolkit/query";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    store: any;
  }
}
const store = configureStore({
  reducer: {
    [baseService.reducerPath]: baseService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseService.middleware),
});

setupListeners(store.dispatch);

window.store = store;

export default store;
