import clsx from "clsx";

interface Variant {
    bg: string,
    border: string,
    text: string,
}

export default function Alert({ 
    children, 
    variant, 
    className, 
    ...props 
}: {
    children: React.ReactNode,
    variant: "success" | "warning" | "error" | "info",
    className?: string,
} & React.ComponentProps<'div'>) {

    const variants: Record<string, Variant> = {
        success: {
            bg: "bg-green-500",
            border: "border-green-500",
            text: "text-white",
        },
        warning: {
            bg: "bg-yellow-500",
            border: "border-yellow-500",
            text: "text-white",
        },
        error: {
            bg: "bg-red-500",
            border: "border-red-500",
            text: "text-white",
        },
        info: {
            bg: "bg-blue-500",
            border: "border-blue-500",
            text: "text-white",
        },
    }

    return (
        <div
            className={clsx(
                'flex items-center justify-between px-4 py-3 rounded-lg relative bg-opacity-50',
                variants[variant].bg,
                variants[variant].border,
                variants[variant].text,
                className
            )}
            role="alert"
            {...props}
        >
            {children}
        </div>
    );
}   