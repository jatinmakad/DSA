import { configureStore } from "@reduxjs/toolkit";
import { post } from "./api";
import { mySlice } from "./postSlice";

export const store = configureStore({
  reducer: { api: post.reducer, [mySlice.name]: mySlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(post.middleware),
});
