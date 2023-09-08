import baseAPI from "../api/baseAPI";

const tasksApi = baseAPI.injectEndpoints({
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
  useAddTaskMutation,
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskStatusMutation,
} = tasksApi;
