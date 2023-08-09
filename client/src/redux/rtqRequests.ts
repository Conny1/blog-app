import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthType, PostType, WritePostType } from "../types";

export const requestApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Array<PostType>, void>({
      query: () => "post/getall",
    }),
    getOnePosts: builder.query<Array<PostType>, string>({
      query: (id) => `post/getone/${id}`,
    }),
    getBypostCategory: builder.query<Array<PostType>, string>({
      query: (category) => `post/suggest/${category}`,
    }),
    signUp: builder.mutation<void, AuthType>({
      query: (body) => ({
        url: `auth/signup`,
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<Array<AuthType>, AuthType>({
      query: (body) => ({
        url: `auth/login`,
        method: "POST",
        body,
      }),
    }),
    writeBlogPost: builder.mutation<void, WritePostType>({
      query: (body) => ({
        url: `post/addpost/${body?.uID}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useGetAllPostsQuery,
  useGetOnePostsQuery,
  useGetBypostCategoryQuery,
  useWriteBlogPostMutation,
} = requestApi;
