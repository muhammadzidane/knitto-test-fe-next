"use client";

import { useCallback, useEffect } from "react";

import { MainLayout, AppText } from "@/features/app/components";
import { usePagination } from "@/features/app/hooks";
import { useTodo } from "@/features/todo/hooks";

import { LoadingList, CreateForm, Pagination } from "./components";
import "./styles.scss";

const TodoIndex: React.FC = () => {
  const { todoListIsFetching, todoListData, todoList } = useTodo();
  const { currentLimit, changeLimit, currentPage, nextPage, prevPage } =
    usePagination();

  const getTodoList = useCallback(() => {
    const params = { _limit: currentLimit, _start: currentPage };
    void todoList({ params });
  }, [todoList, currentPage, currentLimit]);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return (
    <>
      <AppText size="2xlarge">Todo App</AppText>

      <CreateForm />

      <AppText weight="semibold" color="dark-1" size="large">
        List
      </AppText>

      {todoListIsFetching ? (
        <LoadingList />
      ) : (
        <div className="d-flex flex-column gap-4">
          {todoListData?.map((todo) => (
            <AppText key={todo.id}>{todo.title}</AppText>
          ))}
        </div>
      )}

      <Pagination
        onChangeLimit={changeLimit}
        onClickPrev={prevPage}
        onClickNext={nextPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default TodoIndex;
