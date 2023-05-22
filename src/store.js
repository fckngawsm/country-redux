import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";
import { themeReducer } from "./feature/theme/slice-theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
