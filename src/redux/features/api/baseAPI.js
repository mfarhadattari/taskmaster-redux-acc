import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://taskmaster-server.vercel.app",
  }),
  tagTypes: ["Tasks"],
  endpoints: (build) => ({
    getTasks: build.query({ query: () => "/tasks", providesTags: ["Tasks"] }),
    updateTaskStatus: build.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: build.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
    addTask: build.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useUpdateTaskStatusMutation,
  useAddTaskMutation,
  useDeleteTaskMutation,
} = baseAPI;

export default baseAPI;
