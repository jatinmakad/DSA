import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const post = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPost: builder.query({ query: () => "posts", providesTags: ["Posts"] }),
    newPost: builder.mutation({
      query: (obj) => ({
        url: "posts",
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostQuery, useNewPostMutation } = post;
