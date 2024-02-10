import { useTodoCreateMutation, useLazyTodoListQuery } from "../redux/rtk";

export const useTodo = () => {
  // List
  const [
    todoList,
    {
      isFetching: todoListIsFetching,
      isLoading: todoListIsLoading,
      data: todoListData,
    },
  ] = useLazyTodoListQuery();

  // Create
  const [todoCreate, { isLoading: todoCreateIsLoading }] =
    useTodoCreateMutation();

  return {
    todoCreateIsLoading,
    todoListIsFetching,
    todoListIsLoading,
    todoListData,
    todoCreate,
    todoList,
  };
};
