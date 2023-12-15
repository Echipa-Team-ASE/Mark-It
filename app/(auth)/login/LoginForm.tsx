"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Field from "@/components/ui/Field";
import Error from "@/components/ui/Error";
import Form from "@/components/ui/Form";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation/user";

export default function LoginForm() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register,
    formState: { errors },
  } = form;

  const onSubmit = form.handleSubmit(async (data: any) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }).then((response) => {
      const error = response?.error;

      if (error) {
        form.setError("root.serverError", {
          type: "serverError",
          message: "Email sau parola gresita",
        });
      } else {
        router.push("/");
      }
    });
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center">
      <div className="max-w-lg bg-white px-8 py-10 sm:px-16 sm:rounded-md grow">
        <div className="flex flex-row items-center gap-3 justify-center">
          <h1 className="text-xl md:text-3xl font-medium">Mark It</h1>
        </div>
        <p className="mt-7 mb-5 text-2xl">Sign in</p>
        <Form className="my-5" onSubmit={onSubmit}>
          <div>
            <label className="block text-md text-gray-500">
              {" "}
              Adresa de email{" "}
            </label>
            <Field
              type="email"
              className="mt-1"
              register={register}
              name="email"
            />
            {errors.email && <Error message={errors.email.message as string} />}
          </div>
          <div className="mt-6">
            <label className="block text-md text-gray-500"> Parola </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <Field
                type={showPass ? "text" : "password"}
                className="pr-12"
                register={register}
                name="password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center"
                onClick={() => setShowPass((state) => !state)}
              >
                {showPass ? (
                  <div className="hover:text-gray-700 transition-all duration-200 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 mr-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                        clipRule="evenodd"
                      />
                      <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                    </svg>
                  </div>
                ) : (
                  <div className="text-gray-400 hover:text-gray-700 transition-all duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 mr-4"
                    >
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path
                        fillRule="evenodd"
                        d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {errors.password && (
              <Error message={errors.password.message as string} />
            )}
          </div>
          <div className="mt-10 mb-5">
            <Button
              type="submit"
              variant="sapphire"
              className="w-full rounded-md text-center"
            >
              Sign in
            </Button>
            {errors.root?.serverError && (
              <Error
                message={errors.root.serverError.message as string}
                className="mt-3"
              />
            )}
          </div>
        </Form>
        <div className="flex flex-row gap-4 flex-wrap items-center text-sm py-4">
          {/* <Link
            href="/forgot-password"
            className="text-blue-500 hover:underline underline-offset-4"
          >
            Parola uitata?
          </Link> */}
          <p className="text-gray-500">
            Nu ai inca un cont?{" "}
            <Link
              href="/signup"
              className="text-blue-500 hover:underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
