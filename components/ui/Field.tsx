'use client'
import clsx from "clsx";
import { ComponentProps } from "react";
import { ErrorOption, RegisterOptions, UseFormRegister } from "react-hook-form";
import Error from "./Error";

export default function Field({
    name,
    register,
    className,
    rules,
    error,
    ...args
}: {
    name: string;
    register: UseFormRegister<any>;
    className?: string;
    rules?: RegisterOptions;
    error?: ErrorOption; 
} & ComponentProps<'input'>) {

    return (
        <div className="flex grow flex-col">
            <input
                {...args}
                className={clsx(
                    className,
                    'block w-full',
                    'py-3 px-4 rounded-md transition-all  ',
                    'bg-white font-medium',
                    'focus:outline-none focus:ring-2 focus:ring-iris-sapphire-blue',
                    'border-2',
                    'disabled:bg-gray-100',
                    error ? 'border-red-500' : 'border-gray-200',
                )}
                {...register(name, rules)}
            />
            {error && error.message && <Error message={error.message} />}
        </div>
    );
}