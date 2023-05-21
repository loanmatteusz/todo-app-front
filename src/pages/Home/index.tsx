import { useEffect, useState } from "react";
import { Todo } from "../../common/interfaces/todo";
import { Area, TodoForm, TodoList } from "../../components";
import axios from "axios";

const URL = process.env.API_URL as string;

export const Home = () => {

    const [todoList, setTodoList] = useState<Todo[] | []>([]);

    async function getTodos() {
        const response = await axios.get(URL);
        setTodoList(response.data);
    }

    async function createTodo(description: string) {
        await axios.post(URL, { description });
        getTodos();
    }

    async function markTodoAsDone(todo: Todo) {
        await axios.put(`${URL}/${todo._id}`, { done: !todo.done });
        getTodos();
    }
    
    async function removeTodo(todo: Todo) {
        await axios.delete(`${URL}/${todo._id}`);
        getTodos();
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Area className="flex flex-col pt-6 justify-start items-baseline gap-2 max-sm:gap-4">
            <h1 className="text-4xl max-xl:px-2">
                Tasks <small className="text-2xl text-gray-400">Register</small>
            </h1>
            <TodoForm createTodo={createTodo} />
            <TodoList todos={todoList} markDone={markTodoAsDone} removeTodo={removeTodo} />
        </Area>
    );
}
