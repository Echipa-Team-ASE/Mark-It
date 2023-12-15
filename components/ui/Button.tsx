'use client'
import React from "react";
import clsx from "clsx";

interface Variant {
    bg: string,
    border: string,
    text: string,
    hover: {
        bg: string,
        border: string,
        text: string,
    }
}

export default function Button({ children,
    onClick,
    className,
    variant,
    ...args
}: {
    children: React.ReactNode,
    onClick?: () => void,
    className?: string,
    variant: "blue" | "sapphire" | "pink" | "custom" | "gray" | "red",
} & React.ComponentProps<'button'>
) {

    const variants: Record<string, Variant> = {
        blue: {
            bg: "bg-blue-500",
            border: "border-blue-500",
            text: "text-white",
            hover: {
                bg: "hover:bg-transparent",
                border: "hover:border-blue-500",
                text: "hover:text-blue-500",
            }
        },
        sapphire: {
            bg: "bg-markit-sapphire-blue",
            border: "border-markit-sapphire-blue",
            text: "text-white",
            hover: {
                bg: "hover:bg-transparent",
                border: "hover:border-markit-sapphire-blue",
                text: "hover:text-markit-sapphire-blue",
            }
        },
        pink: {
            bg: "bg-markit-pink",
            border: "border-markit-pink",
            text: "text-white",
            hover: {
                bg: "hover:bg-markit-light-blue",
                border: "hover:border-markit-pink",
                text: "hover:text-white",
            }
        },
        darkBlue: {
            bg: "bg-markit-dark-blue",
            border: "border-markit-dark-blue",
            text: "text-white",
            hover: {
                bg: "hover:bg-markit-blue",
                border: "hover:border-markit-dark-blue",
                text: "hover:text-white",
            }
        },
        gray: {
            bg: "bg-gray-200",
            border: "border-gray-200",
            text: "text-black",
            hover: {
                bg: "hover:bg-transparent",
                border: "hover:border-gray-300",
                text: "hover:text-gray-500",
            }
        },
        red: {
            bg: "bg-red-500",
            border: "border-red-500",
            text: "text-white",
            hover: {
                bg: "hover:bg-transparent",
                border: "hover:border-red-500",
                text: "hover:text-red-500",
            }
        },
    }

    return (
        <button
            onClick={onClick}
            className={clsx(
                className,
                "hover:cursor-pointer rounded-full transition-all cursor-pointer px-4 py-2 border-2  ",
                "disabled:bg-gray-400 disabled:cursor-default disabled:text-white disabled:border-gray-400",
                variant !== 'custom' && `${variants[variant].bg} ${variants[variant].border} ${variants[variant].text} ${variants[variant].hover.bg} ${variants[variant].hover.border} ${variants[variant].hover.text}`
            )}
            {...args}
        >
            {children}
        </button>
    );
}