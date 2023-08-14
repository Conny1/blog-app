import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthType, IDtypes, PostType, WritePostType } from "../types";
// import { RootState } from "./store";

export const requestApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4500/",
    prepareHeaders: (headers) => {
      // const token = (getState() as RootState).AuthSlice.authDetails?.tokens;
      const authDet = localStorage.getItem("auth");

      if (authDet) {
        const token = JSON.parse(authDet).tokens;
        console.log(token);
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getAllPosts: builder.query<Array<PostType>, void>({
      query: () => "post/getall",
      providesTags: ["Post"],
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
      invalidatesTags: ["Post"],
    }),
    uploadFile: builder.mutation<string, FormData>({
      query: (formData) => ({
        url: "/uploads",
        method: "POST",
        body: formData,
      }),
    }),
    deletePost: builder.mutation<void, IDtypes>({
      query: ({ userid, postid }) => ({
        url: `post/deletepost/${userid}/${postid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
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
  useUploadFileMutation,
  useDeletePostMutation,
} = requestApi;
