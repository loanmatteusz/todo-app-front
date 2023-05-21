import { Area } from "../../components";

export const About = () => {
    return (
        <Area className="flex flex-col justify-start p-6">
            <h1 className="text-4xl text-bold pb-6">About us</h1>

            <h2 className="text-2xl text-bold">Our history</h2>
            <p className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

            <h2 className="text-2xl text-semibold">Mission and Vision</h2>
            <p className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

            <h2 className="text-2xl text-semibold">Media</h2>
            <p className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </Area>
    );
}
