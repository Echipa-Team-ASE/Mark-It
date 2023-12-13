'use client';

import React, { Fragment } from 'react';
import Logo from '@/public/logo.svg';
import userAvatar from '@/public/user-circle.svg';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navigation = [
    { name: 'My products', href: '/', current: pathname === '/' },
    { name: 'Add new product', href: '/products/add', current: pathname === '/products/add' },
    { name: 'Contact', href: 'https://irisphera.com', current: pathname === '/contact' },
    { name: 'Log Out', href: '/logout', current: pathname === '/logout' }
  ];

  return (
    <nav>
      <div className="hidden md:flex flex-row mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-between p-6 bg-white">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={79}
            className="hover:cursor-pointer h-20"
            onClick={() => (window.location.href = '/')}
          />

          <Button
            variant="custom"
            className="border-none ml-10 flex items-center px-0 mx-4 peer"
            onClick={() => (window.location.href = '/')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 peer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
            &nbsp;
            <p className="hover:underline underline-offset-4 peer-hover:underline font-serif">My products</p>
          </Button>
        </div>
        <div className="flex flex-row flex-grow items-center justify-end p-6 bg-white">
          <Button variant="custom" className="border-none ml-5 flex px-0 mx-4 cursor-default"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 peer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            &nbsp;
            <Link className="hover:underline underline-offset-4 peer-hover:underline font-serif" href="https://irisphera.com">Contact</Link>
          </Button>
          <Button
            variant="custom"
            className="m-4 bg-gradient-to-r from-iris-dark-blue to-iris-pink text-white hover:opacity-80 border-0"
            onClick={() => (window.location.href = '/products/add')}
          >
            + Add a new product
          </Button>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center">
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-iris-pink"
                  src={userAvatar}
                  alt=""
                  width={50}
                  height={50}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className={clsx("group flex w-full items-center rounded-md px-2 py-2 text-sm", "hover:bg-gray-200")}
                        href="/logout"
                      >
                        {active ? (
                          <div className='bg-iris-pink rounded-full flex items-center justify-center p-1 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white" aria-hidden="true">
                              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                          </div>
                        ) : (
                          <div className='rounded-full flex items-center justify-center p-1 mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-iris-pink" aria-hidden="true">
                              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        Log out
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <Disclosure as="div" className="p-2 border-b-[1px] flex flex-col justify-between md:hidden">
        {({ open }) => (
          <>
            <div className="flex justify-between w-full items-center">
              <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={79}
                className="hover:cursor-pointer h-14"
                onClick={() => (window.location.href = '/')}
              />
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 transition-all duration-200">
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                )}
              </Disclosure.Button>
            </div>
            <Transition
              enter="transition-all ease-out duration-500"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={clsx(
                        item.current
                          ? 'bg-iris-dark-blue text-white'
                          : 'text-black hover:bg-iris-light-blue hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </nav>
  );
}
