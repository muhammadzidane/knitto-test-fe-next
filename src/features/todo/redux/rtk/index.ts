import { type IAppBody, IAppParams } from "@/features/app/interfaces";
import serviceApi from "@/plugins/redux/service";

import { type ILoginResponse, type ILoginBody, ITodo } from "./interfaces";

export const todoApi = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    todoCreate: builder.mutation<ILoginResponse, IAppBody<ILoginBody>>({
      query: ({ body }) => ({
        url: "/todos",
        method: "POST",
        body,
      }),
    }),
    todoList: builder.query<ITodo[], IAppParams>({
      query: ({ params }) => ({
        url: "/todos",
        method: "GET",
        params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useTodoCreateMutation, useLazyTodoListQuery } = todoApi;
