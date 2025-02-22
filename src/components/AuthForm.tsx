import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import CustomInput from "./CustomInput";

import { Loader2 } from "lucide-react";

import PlaidLink from "./PlaidLink";
import { authFormSchema } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "@/actions/tanstack/mutasion";
import { getUserInfo, signIn, signUp } from "@/actions/appwrite/userActions";

import { useUserStore } from "@/actions/zustand/userState";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const AuthForm = ({ type }: { type: string }) => {
  const user = useUserStore((state: any) => state.user);
  console.log(user);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const formSchema = authFormSchema(type);
  const openChatFn = useUserStore((state: any) => state.setUser);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const createUsers = useMutation(api.chats.createUser);
  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Sign up with Appwrite & create plaid token

      if (type === "sign-up") {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email!,
          password: data.password!,
        };
        console.log("userData", userData);

        const account = await signUp(userData);
        if (account) {
          await createUsers({
            name: `${data.firstName}  ${data.lastName}`,
            _id: account?.$id,
          });
        }

        openChatFn(account);
        navigate("/");
        setIsLoading(false);
      } else if (type === "sign-in") {
        setIsLoading(true);
        const userData = {
          email: data.email,
          password: data.password,
        };
        const logIn = await getUserInfo(userData.email!, userData.password!);
        openChatFn(logIn);

        if (!logIn) return;
        navigate("/");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link to="/" className="cursor-pointer flex items-center gap-1">
          <img src="/icons/logo.svg" alt="Horizon logo" className="w-38 h-38" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black2-1">
            Horizon Finance
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Lier le compte" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Liez votre compte pour commencer" : "Veuillez entrer vos informations"}
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="Nom"
                      placeholder="Entrez votre nom"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Prenom"
                      placeholder="Entrez votre Prenom"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Entrez votre address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="ville"
                    placeholder="Entrez votre ville"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="pay"
                      placeholder="Example: NY"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label=" Code Postal"
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
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Entrez votre mot de email"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="Mot de passe "
                placeholder="Entrez votre mot de passe"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
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
  );
};

export default AuthForm;
