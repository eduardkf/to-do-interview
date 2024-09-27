import { TodoResponse } from "@/types/ToDoResponse";

export async function fetchTodos() : Promise<TodoResponse> {
    const response = await fetch(`https://dummyjson.com/todoss?limit=5&skip=0`, {cache: 'no-store'});

    if(!response.ok) {
        throw new Error("Could not fetch todos");
    }

    const data:TodoResponse = await response.json();

    return data;

}

