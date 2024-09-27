"use client"

import NewTodo from "@/features/home/NewTodo";
import HomeTitle from "@/features/home/Title";
import TodoList from "@/features/home/TodoList";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from "react";

export default function Home() {

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <div className="flex flex-col w-full gap-10">
          <HomeTitle />
          <TodoList />
          <NewTodo />
        </div>
      </QueryClientProvider>
    </>
  );
}
