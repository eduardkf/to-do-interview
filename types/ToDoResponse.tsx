import { TodoOut } from "./TodoOut";

export type TodoResponse = {
    todos: TodoOut[],
    total: number,
    skip: number, 
    limit: number
}