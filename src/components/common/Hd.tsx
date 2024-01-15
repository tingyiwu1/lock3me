import React from "react";

interface HdProps {
    children: React.ReactNode;
}

const Hd = ({ children }: HdProps) => {
    return (
        <span
            style={{
                color: "white",
            }}
        >
            {children}
        </span>
    );
};

export default Hd;
