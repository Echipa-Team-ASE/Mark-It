'use client'
import clsx from "clsx";
import { ComponentProps, Fragment, useState } from "react";
import { Control, Controller, ErrorOption, FieldValues, RegisterOptions, UseFormRegister, useController, useFormContext } from "react-hook-form";
import Error from "./Error";
import React from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function SelectField({
    name,
    multiple = false,
    options,
    control,
    className,
    rules,
    error,
    ...args
}: {
    name: string;
    multiple?: boolean;
    options: string[];
    control: Control<any>;
    className?: string;
    rules?: RegisterOptions;
    error?: ErrorOption;
} & ComponentProps<'select'>) {

    const controller = useController({
        name,
        control,
        rules,
        defaultValue: multiple === false ? options[0] : [...options],
    });

    // controller.field.onChange = (e) => {
    //     console.log(e);
    //     controller.field.onChange(e);
    // }

    return (
        <div className="flex flex-col">
            <Controller
                name={name}
                control={control}
                defaultValue={options[0]}
                render={({ field }) => (
                    <Listbox value={field.value} onChange={field.onChange} multiple={multiple}>
                        <div className="relative">
                            <Listbox.Button className={clsx(
                                className,
                                "border-2 relative w-full cursor-default rounded-md py-3 pl-3 pr-10 text-left ",
                                "focus:outline-none focus:ring-2 focus:ring-iris-sapphire-blue",
                                error ? 'border-red-500' : 'border-gray-200',
                            )}>
                                {multiple === false ? <span className="block min-w-[40px] truncate">{field.value}</span> :
                                    field.value === undefined ? <span className="block truncate">Select an option</span> :
                                        (
                                            <div className="flex flex-row space-x-1">
                                                {
                                                    field.value[0] !== undefined ?
                                                    options.map((option, idx) => (
                                                        field.value.includes(option) && <span key={idx} className="truncate bg-gray-100 px-2 rounded-md">{option}</span>
                                                    )) :
                                                    <span className="block truncate px-3">&nbsp;</span>
                                                }
                                            </div>
                                        )
                                }

                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {options.map((option, idx) => (
                                        <Listbox.Option
                                            key={idx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? ' bg-iris-light-blue bg-opacity-40' : 'text-gray-900'
                                                }`
                                            }
                                            value={option}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {option}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-iris-dark-blue">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                            </svg>
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                )}
            />
            {error && error.message && <Error message={error.message} />}
        </div>
    );
}