'use client';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Field from '@/components/ui/Field';
import { z } from 'zod';
import Select from '@/components/ui/Select';
import SelectField from '@/components/ui/SelectField';
import { insertUserSchema } from '@/validation/user';
import { User } from '@/db/schema/user';

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

  console.log(managers);

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

    // form.reset();
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
                <Dialog.Panel className="flex flex-col w-full max-w-xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Form className="mt-4" onSubmit={onSubmit}>
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Create a new user
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">You can create a new user by filling out the form below.</p>
                      <div className="flex flex-row gap-3">
                        <div>
                          <label className="block text-md text-gray-500"> Full name</label>
                          <Field type="text" className="mt-1" register={register} name="name" />
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
                      <div>
                        <label className="block text-md text-gray-500">Manager</label>
                        <SelectField
                          className="mt-1 z-40"
                          inputOptions={managers.map((manager) => ({
                            label: manager.name,
                            value: manager.id,
                          }))}
                          control={form.control}
                          name="manager"
                        />
                      </div>
                    )}
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        // onClick={closeModal}
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
