'use client'
import { Fragment, useState } from "react";
import { UseControllerProps, useController } from "react-hook-form";
import { Listbox, Transition } from '@headlessui/react';
import clsx from "clsx";

export interface Option {
    label: string,
    value: string,
    disabled?: boolean,
};

export default function Select({
    options,
    className,
    ...props
}: {
    options: Array<Option>,
    className?: string;
} & UseControllerProps) {

    const [selected, setSelected] = useState(options[0]);

    const {
        field: { onChange },
        fieldState: { error },
    } = useController(props);

    return (
        <Listbox
            value={selected}
            name={props.name}
            onChange={(e) => {
                onChange(e.value);
                setSelected(e);
            }}
        >
            {({ open }) => (
                <div className={clsx(className, 'relative')}>
                    <Listbox.Button
                        className={clsx(
                            'relative w-full cursor-default text-left',
                            'py-2 px-4 rounded-md transition-all',
                            'bg-white font-medium',
                            'focus:outline-none focus:ring-2 focus:ring-markit-sapphire-blue',
                            'border-2 border-gray-200',
                        )}
                    >
                        <span className={clsx(selected.disabled ? 'text-gray-400' : '')}>{selected.label}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </Listbox.Button>
                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 z-1 max-h-56 w-full overflow-auto rounded-md py-1 backdrop-blur-md bg-white shadow-md">
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.label}
                                    className={({ active }) =>
                                        clsx(
                                            active ? 'text-markit-sapphire-blue bg-markit-sapphire-blue bg-opacity-10' : '',
                                            option.disabled ? 'text-gray-400' : '',
                                            'relative cursor-default select-none py-2 pl-10 pr-4 transition-all'
                                        )
                                    }
                                    value={option}
                                    disabled={option.disabled}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span>{option.label}</span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
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
            )}
        </Listbox>
    );
}