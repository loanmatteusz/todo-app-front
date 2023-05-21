import React from "react";

interface AreaProps {
    className?: string;
    children: React.ReactNode;
}

export const Area = (props: AreaProps) => {
    return (
        <div
            className={`
                flex w-[1200px] h-16
                max-xl:w-full
                max-[320px]:text-xs
                ${props.className}
            `}
        >
            {props.children}
        </div>
    );
}
