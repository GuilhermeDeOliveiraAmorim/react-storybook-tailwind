import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';
import React, { ReactNode } from "react";

export interface HeadingProps {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    asChild?: boolean;
}

function Heading({ size = "md", children, asChild }: HeadingProps) {

    const Comp = asChild ? Slot : "h2";

    return (
        <Comp className={clsx("text-gray-100 font-sans", {
            'text-xs': size === "sm",
            'text-sm': size === "md",
            "text-md": size === "lg",
        })}>
            {children}
        </Comp>
    )
}

export { Heading };
