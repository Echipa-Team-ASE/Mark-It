'use client'
import clsx from "clsx";
import { ComponentProps, Fragment, useEffect, useState } from "react";
import { Control, ErrorOption, RegisterOptions, useController } from "react-hook-form";
import Error from "./Error";
// import { useDropzone } from 'react-dropzone'
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

type NumberAttr =
    | number
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';

type ColOrderNumber = number | '1' | '2' | '3' | '4' | '5';
type ColOrder = ColOrderNumber | 'first' | 'last';
type ColSize = boolean | 'auto' | NumberAttr;
type ColSpec =
    | ColSize
    | { span?: ColSize; offset?: NumberAttr; order?: ColOrder };

function ImageLightbox({ show, handleClose, imageSrc }: { show: boolean; handleClose: any; imageSrc: string }) {

    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-[600px] transform overflow-hidden shadow-xl transition-all">
                                <Image className={`object-contain max-h-[100%] max-w-[100%] transition-all justify-items-stretch duration-200 m-0 bg-white`} alt="Lightbox Image" src={imageSrc} width={600} height={300} />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default function DragAndDrop(
    {
        name,
        control,
        className,
        rules,
        error,
        multiple,
        ...args
    }: {
        name: string;
        control: Control<any>;
        className?: string;
        rules?: RegisterOptions;
        error?: ErrorOption;
    } & ComponentProps<'input'>) {

    // const controller = useController({
    //     name,
    //     control,
    // });

    // const file = controller.field.value;
    // const [lightbox, setLightbox] = useState({ show: false, imageSrc: "" });

    // const { acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive } = useDropzone({
    //     maxFiles: 1,
    //     maxSize: 6250000,
    //     onDrop: (acceptedFiles) => {
    //         controller.field.onChange(acceptedFiles[0]);
    //     }
    // });

    // function deleteFile() {
    //     controller.field.onChange(null);
    // }

    // return (

    //     <div className={clsx(className, "flex items-center justify-center w-full")}>
    //         <>
    //             <div className="flex flex-col grow">
    //                 <div

    //                     {...(file ? { className: clsx(`dropzone p-1 w-full`) } : getRootProps({ className: clsx(`dropzone p-1 w-full`) }))}
    //                 >
    //                     <div className={clsx(isDragActive ? "bg-gray-100" : "bg-white", "group h-[200px] w-full flex flex-col items-center flex-1 justify-center transition-all duration-200 hover:bg-gray-100 border-2 rounded-lg", error ? "border-red-500" : "border-markit-sapphire-blue border-dashed")} >
    //                         <input {...getInputProps()} />
    //                         {file ? (
    //                             <>
    //                                 {file.path && (
    //                                     <>
    //                                         <Image className={`object-contain max-h-full max-w-full transition-all duration-200 m-0 bg-white justify-items-stretch`} alt={`Campaign photo`} src={URL.createObjectURL(file)} width={600} height={200} />
    //                                         <div className={`flex absolute opacity-0 transition-all duration-200 flex-row items-center space-x-2 group-hover:opacity-100`}>
    //                                             <span className={`h-[30px] aspect-square rounded-full bg-primary flex items-center justify-center bg-markit-sapphire-blue text-white`} onClick={() => setLightbox({ show: true, imageSrc: URL.createObjectURL(file) })} >
    //                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    //                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    //                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //                                                 </svg>

    //                                             </span>
    //                                             <span className={`h-[30px] aspect-square rounded-full bg-red-500 flex items-center justify-center text-white mx-0 my-[0.5rem]`} onClick={() => deleteFile()}>
    //                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    //                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    //                                                 </svg>

    //                                             </span>
    //                                         </div>
    //                                     </>
    //                                 )}
    //                                 {(!(file?.path) && (file?.id && file?.url)) && (
    //                                     <>
    //                                         {/* <Image className={`object-contain max-h-[100%] max-w-[100%] transition-all duration-200 m-0 bg-white justify-items-stretch`} alt={`Campaign photo`} src={`${file.url}`} width={300} height={300} />
    //                                         <div className={`flex absolute opacity-0 transition-all duration-200 flex-row items-center space-x-2 group-hover:opacity-100`}>
    //                                             <span className={`h-[30px] aspect-square rounded-full bg-primary flex items-center justify-center text-white`} onClick={() => setLightbox({ show: true, imageSrc: file.url })}>
    //                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    //                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    //                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //                                                 </svg>

    //                                             </span>
    //                                             <span className={`h-[30px] aspect-square rounded-full bg-red-500 flex items-center justify-center text-white mx-0 my-[0.5rem]`} onClick={() => deleteSpacesFile(idx)}>
    //                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    //                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    //                                                 </svg>
    //                                             </span>
    //                                         </div> */}
    //                                     </>
    //                                 )}

    //                             </>
    //                         ) : (
    //                             <div className={`flex items-center justify-center text-center flex-col`}>
    //                                 <span className={`h-[30px] aspect-square rounded-full bg-primary flex items-center justify-center`}>
    //                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-markit-sapphire-blue">
    //                                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    //                                     </svg>
    //                                 </span>
    //                                 <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Drag & drop or <span className="font-medium text-markit-sapphire-blue hover:underline cursor-pointer underline-offset-2"> browse </span></p>
    //                             </div>
    //                         )}

    //                     </div>
    //                 </div>
    //                 {error && error.message && <div className="mt-2"><Error message={error.message} /></div>}
    //             </div>
    //             <ImageLightbox show={lightbox.show} handleClose={() => setLightbox(prev => ({ show: false, imageSrc: prev.imageSrc }))} imageSrc={lightbox.imageSrc} />
    //         </>
    //     </div>
    // )

    return <></>
}