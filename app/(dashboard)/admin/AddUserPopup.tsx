'use client';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Field from '@/components/ui/Field';
import { z } from 'zod';
import SelectField from '@/components/ui/SelectField';
import { insertUserSchema } from '@/validation/user';
import Error from '@/components/ui/Error';

export interface ManagerOption {
  name: string;
  id: string;
}

export default function AddUserPopup({ managers }: { managers: ManagerOption[] }) {
  const form = useForm<z.infer<typeof insertUserSchema>>({
    resolver: zodResolver(insertUserSchema),
    defaultValues: {
      role: 'user',
    },
  });

  const role = form.watch('role');

  const dummyManagers = [
    {
      name: 'John Doe',
      id: '1',
    },
    {
      name: 'Jane Moe',
      id: '2',
    },
    {
      name: 'John Doe',
      id: '3',
    },
    {
      name: 'Jane Moe',
      id: '4',
    },
    {
      name: 'John Doe',
      id: '5',
    },
    {
      name: 'Jane Moe',
      id: '6',
    },
  ];

  const {
    register,
    formState: { errors },
  } = form;

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit = form.handleSubmit(async (data: any) => {
    console.log(data);

    fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        form.reset();
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Button variant="blue" onClick={openModal}>
        + Add a new user
      </Button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="relative flex flex-col w-full max-w-xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button className="fixed top-0 right-0 p-4 z-40" onClick={closeModal}>
                    <svg
                      className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <Form className="mt-4" onSubmit={onSubmit}>
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Create a new user
                    </Dialog.Title>
                    <div className="mt-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-md text-gray-500"> Full name</label>
                          <Field type="text" className="mt-1" register={register} name="name" />
                          {errors.name && <Error message={errors.name.message as string} />}
                        </div>
                        <div className="flex grow flex-col">
                          <label className="block text-md text-gray-500"> Full name</label>
                          <SelectField
                            className="mt-1"
                            inputOptions={[
                              { label: 'User', value: 'user' },
                              { label: 'Manager', value: 'manager' },
                              { label: 'Admin', value: 'admin' },
                            ]}
                            control={form.control}
                            name="role"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label className="block text-md text-gray-500"> Email address</label>
                        <Field type="text" className="mt-1" register={register} name="email" />
                      </div>
                      <div className="mt-2">
                        <label className="block text-md text-gray-500"> Password</label>
                        <Field type="text" className="mt-1" register={register} name="password" />
                      </div>
                    </div>
                    {role === 'user' && (
                      <div className='mt-2'>
                        <label className="block text-md text-gray-500">Manager</label>
                        <SelectField
                          className="mt-1 z-40"
                          inputOptions={managers.map((manager) => ({
                            label: manager.name,
                            value: manager.id,
                          }))}
                          control={form.control}
                          name="managerId"
                        />
                      </div>
                    )}
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Create User
                      </button>
                    </div>
                  </Form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
