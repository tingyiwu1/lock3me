import React from "react";

interface EmProps {
    children: React.ReactNode;
}

const Em = ({ children }: EmProps) => {
    return (
        <span
            style={{
                fontStyle: "italic",
            }}
        >
            {children}
        </span>
    );
};

export default Em;
