"use client";

import React, { Fragment } from "react";
import Logo from "@/public/logo.svg";
import userAvatar from "@/public/user-circle.svg";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const session = useSession();
  const user = session?.data?.user;

  const navigation = [
    { name: "My products", href: "/", current: pathname === "/" },
    {
      name: "Add new product",
      href: "/products/add",
      current: pathname === "/products/add",
    },
    {
      name: "Contact",
      href: "https://markitphera.com",
      current: pathname === "/contact",
    },
    { name: "Log Out", href: "/logout", current: pathname === "/logout" },
  ];

  return (
    <nav className="shadow-lg sticky top-0 right-0">
      <div className="hidden md:flex flex-row mx-auto max-w-7xl">
        <div className="flex flex-row items-center justify-between bg-white gap-4">
          <label
            className="flex flex-row items-center gap-1 hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="h-20"
            />
            <p>Mark it</p>
          </label>

          <Button
            variant="custom"
            className="border-none flex items-center px-0 peer"
            onClick={() => router.push("/")}
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
            <p className="hover:underline underline-offset-4 peer-hover:underline">
              My tasks
            </p>
          </Button>
          {user?.role === "manager" ||
            (user?.role === "admin" && (
              <Button
                variant="custom"
                className="border-none flex items-center px-0 peer"
                onClick={() => router.push("/manage-users")}
              >
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                &nbsp;
                <p className="hover:underline underline-offset-4 peer-hover:underline">
                  Manage users
                </p>
              </Button>
            ))}
          {user?.role === "admin" && (
            <Button
              variant="custom"
              className="border-none flex items-center px-0 peer"
              onClick={() => router.push("/admin")}
            >
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              &nbsp;
              <p className="hover:underline underline-offset-4 peer-hover:underline">
                Admin
              </p>
            </Button>
          )}
        </div>
        <div className="flex flex-row flex-grow items-center justify-end bg-white">
          <Button
            variant="custom"
            className="m-4 bg-gradient-to-r from-markit-dark-blue to-markit-pink text-white hover:opacity-80 border-0"
            onClick={() => (window.location.href = "/products/add")}
          >
            + Add a new task
          </Button>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center">
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-markit-pink"
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
                        className={clsx(
                          "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                          "hover:bg-gray-200"
                        )}
                        href="/logout"
                      >
                        {active ? (
                          <div className="bg-markit-pink rounded-full flex items-center justify-center p-1 mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        ) : (
                          <div className="rounded-full flex items-center justify-center p-1 mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5 text-markit-pink"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clipRule="evenodd"
                              />
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
      <Disclosure
        as="div"
        className="p-2 border-b-[1px] flex flex-col justify-between md:hidden"
      >
        {({ open }) => (
          <>
            <div className="flex justify-between w-full items-center">
              {/* <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={79}
                className="hover:cursor-pointer h-14"
                onClick={() => (window.location.href = '/')}
              /> */}
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
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
                          ? "bg-markit-dark-blue text-white"
                          : "text-black hover:bg-markit-light-blue hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
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
