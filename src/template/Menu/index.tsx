import { Link } from "react-router-dom";
import { Area } from "../../components";
import { TodoIcon } from "../../components/Icons/TodoIcon";

export const Menu = () => {
    return (
        <Area className={`
            bg-black text-gray-300 text-lg
            rounded-b-md
            px-6 py-2 gap-6
            items-end
            max-sm:justify-center
        `}>
            <div className="flex items-end">
                <TodoIcon />
                <h1 className="text-2xl font-semibold">TodoApp</h1>
            </div>
            <Link to='/'
                className="hover:cursor-pointer hover:text-white"
            >
                Menu
            </Link>
            <Link to='/about'
                className="hover:cursor-pointer hover:text-white"
            >
                About
            </Link>
        </Area>
    );
}
