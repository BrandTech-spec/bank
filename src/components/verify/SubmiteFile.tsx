import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Loader2 } from "lucide-react";

import { authFormSchema } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "@/actions/tanstack/mutasion";
import { getUserInfo, signIn } from "@/actions/appwrite/userActions";

import { useUserStore } from "@/actions/zustand/userState";
import CustomInput from "../CustomInput";
import PlaidLink from "../PlaidLink";
import { FileUploader } from "../FileUploader";

const SubmiteFile = ({ type }: { type: string }) => {
  const user = useUserStore((state: any) => state.user);
  console.log(user);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const formSchema = authFormSchema(type);
  const { mutateAsync: createUser, isPending: isCreatingUser } = useSignUp();
  const openChatFn = useUserStore((state: any) => state.setUser);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
  };

  return (
    <div className="w-full h-full items-center px-4 justify-center flex">
      <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
          <Link to="/" className="cursor-pointer flex items-center gap-1">
            <img
              src="/icons/logo.svg"
              alt="Horizon logo"
              className="w-38 h-38"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black2-1">
              Horizon
            </h1>
          </Link>

          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user
                ? "Link Account"
                : type === "sign-in"
                ? "Sign In"
                : "Sign Up"}
              <p className="text-16 font-normal text-gray-600">
                {user
                  ? "Link your account to get started"
                  : "Please enter your details"}
              </p>
            </h1>
          </div>
        </header>
        {user ? (
          <div className="flex flex-col gap-4">
            <PlaidLink user={user} variant="primary" />
          </div>
        ) : (
          <>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <>
                  {/*<div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your first name"
                    />
                  </div>*/}
                  <CustomInput
                    control={form.control}
                    name="card_name"
                    label="Address"
                    placeholder="Enter your specific address"
                  />
                  <CustomInput
                    control={form.control}
                    name="serial_number"
                    label="City"
                    placeholder="Enter your city"
                  />
                  {/*<div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="Example: NY"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="Example: 11101"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="YYYY-MM-DD"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="Example: 1234"
                    />
                  </div>*/}
                </>

                <FormField
                  control={form.control}
                  name="files"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <FileUploader
                          files  ={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <FileUploader
                          files={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-4">
                  <Button
                    type="submit"
                    disabled={isCreatingUser || isLoading}
                    className="form-btn"
                  >
                    {isCreatingUser || isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> &nbsp;
                        Loading...
                      </>
                    ) : type === "sign-in" ? (
                      "Sign In"
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </div>
              </form>
            </Form>

            <footer className="flex justify-center gap-1">
              <p className="text-14 font-normal text-gray-600">
                {type === "sign-in"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </p>
              <Link
                to={type === "sign-in" ? "/sign-up" : "/sign-in"}
                className="form-link"
              >
                {type === "sign-in" ? "Sign up" : "Sign in"}
              </Link>
            </footer>
          </>
        )}
      </section>
    </div>
  );
};

export default SubmiteFile;
