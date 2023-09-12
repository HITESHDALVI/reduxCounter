import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import accountReducer from "./utiis/slice/AccountSlice.ts";
import bonusReducer from "./utiis/slice/BonusSlice.ts";
import {adminApi} from "./utiis/api/api.ts";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
