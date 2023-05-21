import { IconCheck, IconReload, IconTrash } from "@tabler/icons-react";
import { Area } from "..";
import { Todo } from "../../common/interfaces/todo";

interface TodoListProps {
    todos: Todo[];
    markDone?: (todo: Todo) => void;
    removeTodo?: (todo: Todo) => void;
}

export const TodoList = (props: TodoListProps) => {

    function renderHead() {
        return (
            <tr>
                <th className={`
                    font-bold text-left p-2
                    xl:min-w-[1100px]
                    min-w-[600px]
                    max-sm:min-w-[200px]
                `}>
                    Description
                </th>
                <th className={`
                    w-full font-bold text-left
                `}>
                    Actions
                </th>
            </tr>
        );
    }

    function renderData(todos: Todo[]) {
        return (
            todos.map((todo) => {
                return (
                    <tr key={todo._id}>
                        <td className={`
                            text-left p-2
                            xl:min-w-[1100px]
                            min-w-[600px]
                            max-sm:min-w-[200px]
                            ${todo.done === true ? 'text-gray-500 line-through' : ''}
                        `}>
                            {todo.description}
                        </td>
                        <td className="w-full">
                            {
                                todo.done === true ? (
                                    <div className="flex gap-1">
                                        <button className="flex bg-yellow-500 p-1 rounded-lg"
                                            onClick={() => props.markDone?.(todo)}
                                        >
                                            <IconReload />
                                        </button>
                                        <button className="flex bg-red-500 p-1 rounded-lg"
                                            onClick={() => props.removeTodo?.(todo)}
                                        >
                                            <IconTrash />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        className="flex bg-green-500 p-1 rounded-lg"
                                        onClick={() => props.markDone?.(todo)}
                                    >
                                        <IconCheck />
                                    </button>
                                )
                            }
                        </td>
                    </tr>
                );
            })
        );
    }

    return (
        <Area className="max-xl:px-2">
            <table className={`flex flex-col w-full mt-4`}>
                <thead className={`w-full bg-gray-200 border-b-2 border-black`}>
                    {renderHead()}
                </thead>
                <tbody className="flex flex-col py-1">
                    {renderData(props.todos)}
                </tbody>
            </table>
        </Area>
    );
}
