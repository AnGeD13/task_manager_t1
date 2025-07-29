import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ITask } from "../model";

const SERVER_BASE_URL = "http://localhost:3000/api";

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_BASE_URL}),
  tagTypes: ['Tasks'],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], void>({
      query: () => "/",
      providesTags: ['Tasks'],
    }),
    getTaskById: builder.query<ITask, string>({
      query: (id) => `/task/${id}`,
      providesTags: (result, error, id) => [{type: "Tasks", id}],
    }),
    createTask: builder.mutation<ITask, ITask>({
      query: (newTask) => ({
        url: '/task/new',
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: builder.mutation<ITask, {id: string, changedTask: ITask}>({
      query: ({id, changedTask}) => ({
        url: `/task/${id}`,
        method: "PATCH",
        body: changedTask,
      }),
      invalidatesTags: (result, error, {id}) => ['Tasks', {type: 'Tasks', id}],
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = taskApi;