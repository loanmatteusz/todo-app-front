import { IconPlus, IconSearch, IconX } from "@tabler/icons-react";
import { Area } from "..";
import { useState } from "react";

interface TodoFormProps {
    createTodo?: (description: string) => void;
}

export const TodoForm = (props: TodoFormProps) => {

    const [input, setInput] = useState<string>('');

    function changeInputValue(event: any) {
        setInput(event.target.value);
    }

    function addTodo() {
        props.createTodo?.(input);
        setInput('');
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    }

    return (
        <Area className="flex items-center gap-2 max-sm:flex-col max-xl:px-2">
            <div className={`
                flex
                w-full col-xs-12 col-sm-9 col-md-10
                max-sm:justify-center max-sm:items-center
            `}>
                <input id="description"
                    type="text"
                    placeholder="Type a task description"
                    value={input}
                    onChange={changeInputValue}
                    onKeyDown={handleKeyDown}
                    className={`
                        w-full border border-gray-300 h-10 rounded-md focus:outline-none px-2
                        max-sm:px-2
                    `}
                />
            </div>

            <div className={`
                flex gap-1 col-xs-12 col-sm-3 col-md-2
                max-sm:w-full max-sm:justify-end
            `}>
                <button
                    className=" flex justify-center items-center text-white w-10 h-10 bg-black rounded-md"
                    onClick={addTodo}
                >
                    <IconPlus size={20} />
                </button>
                <button
                    className=" flex justify-center items-center text-white w-10 h-10 bg-gray-500 rounded-md"
                    onClick={() => { }}
                >
                    <IconSearch size={20} />
                </button>
                <button
                    className={`
                        flex justify-center items-center w-10 h-10
                        bg-white rounded-md border border-gray-500
                     `}
                    onClick={() => setInput('')}
                >
                    <IconX size={20} />
                </button>
            </div>
        </Area>
    );
}
