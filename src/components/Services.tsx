import React, { useCallback, useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { Loader, MessageCircle, User, X } from "lucide-react";

import { useUserStore } from "@/actions/zustand/userState";
import { CardsChat } from "./Chat";
 type FormValues = {
    receiver: string;
    sender: string;
    admin: boolean;
  };
const Services = ({ receiver, sender, admin }:FormValues) => {
 

  const [value, setValue] = useState("");
  console.log(value);
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmite = (data: FormValues) => {
    console.log(data);
    setLoading(true);
    emailjs
      .send(
        "service_m9pnrxm",
        "template_ji8mymb",
        {

        },
        "k8obTLwCkFlV08UAg"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "thank you for your thrust i will get back to you as soon as possible"
          );
        },
        (error) => {
          toast.error("faild to load the message please try again");
          console.log(error);
          setLoading(false);
        }
      );
  };

  const trigerBnt = () => {
    setOpen(!open);
  };
  const openChart = useUserStore((state: any) => state.openChatFn);
  const chatState = useUserStore((state: any) => state.chatState);
  const user = useUserStore((state: any) => state.user);
  return (
    <>
      <Toaster richColors />
      <div
        onClick={() => openChart()}
        className=" cursor-pointer  z-50 w-auto rounded-full fixed bottom-3 right-6  lg:bottom-3  lg:right-[400px]"
      >
        <div className="flex gap-2 flex-row-reverse">
          <div className="px-4 py-4 bg-blue-400 rounded-full">
            <MessageCircle className="w-7 h-7 " color="white" />
          </div>
        </div>
        <div className=" cursor-pointer hidden z-50 w-auto rounded-full fixed bottom-16 right-20 lg:bottom-11  lg:right-[465px]">
          <div className="w-auto max-w-xl max-h-auto flex items-center justify-center gap-3 relative bg-white rounded-b-xl rounded-tr-xl text-black  py-3 px-2 shadow-[0_10px_40px_0px_rgba(0,0,0,0.15)]">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>cn</AvatarFallback>
            </Avatar>
            <div className="chat-container  pt-2">
              <div className="container2">
                <p className="message">Welcome to Horizon how can i help you</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative">
          <span className="h-4 w-4 rounded-full bg-red-700 absolute top-1 right-1 text-center text-white text-xs">
            1
          </span>
        </div>
      </div>
      {/*<CardsChat setOpenChat={setOpen} receiver={receiver} sender={sender} admin={admin} />*/}
      <div
        className={`  ${
          chatState ? "block" : "hidden"
        } bg-white  ring-1 ring-blue-100 overflow-hidden  max-md:w-full w-[350px]  fixed bottom-20 top-10 overflow-y-auto no-scrollbar z-50 right-32 max-md:right-0 rounded-xl max-md:bottom-0 max-md:top-0`}
      >
        <div className="text-black w-full flex items-baseline justify-between py-1 px-2 bg-slate-100 sticky top-0 inset-x-0">
          <div className="flex items-center justify-center gap-2 text-blue-500 font-bold ">
            <Avatar className="bg-gray-300">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback className=" uppercase font-bold text-white "><User/></AvatarFallback>
          </Avatar>
          <span>{user?.firstName[0]} {" "} {user?.lastName} </span>
          </div>
          
          
          <X className=" cursor-pointer" onClick={() => openChart()} />
        </div>

        <div className="px-12  mt-10">
          <form
            onSubmit={handleSubmit(onSubmite)}
            className="w-full h-full flex  flex-col px-2 py-14 overflow-y-auto "
          >
            <div className="mb-6 py-1 ">
              <input
                id="full_name"
                type="full_name"
                placeholder="Full Name"
                className="w-full py-3 px-3 border-[1px] text-black2 font-light font-mono border-gray-400 outline-none bg-white rounded-lg placeholder:opacity-100 placeholder:font-light "
                {...register("full_name", {
                  required: "full name is required",
                })}
              />

              {errors.full_name ? (
                <div className="text-red-800">{errors.full_name.message} </div>
              ) : (
                ""
              )}
            </div>

            <div className="mb-6 py-1 ">
              <input
                id="email"
                type="email"
                placeholder="name@mail.com"
                className="w-full py-3 px-3 text-black2 font-light font-mono border-[1px] border-gray-400 outline-none bg-white rounded-lg placeholder:opacity-100 placeholder:font-light "
                {...register("email", {
                  required: "email is required",
                })}
              />

              {errors.email ? (
                <div className="text-red-800">{errors.email.message} </div>
              ) : (
                ""
              )}
            </div>

            <div className="mb-6 py-1  bg-white">
              <PhoneInput
                flags={flags}
                placeholder="phone"
                international
                defaultCountry="US"
                {...register("phone", {})}
                className="mt-2 w-full h-11 text-black2 font-light font-mono rounded-md px-3 text-sm border placeholder:text-dark-600 border-gray-400"
              />

              {errors.phone ? (
                <div className="text-red-800">{errors.phone.message} </div>
              ) : (
                ""
              )}
            </div>

            <div className="mb-6 ">
              <div className="w-full flex rounded-lg items-center px-2 py-1 border-gray-40 border-[1px] ">
                <textarea
                  rows={4}
                  placeholder="How can we help you"
                  className="w-full text-black2 font-light  placeholder:opacity-100 py-2 px-2 outline-none bg-transparent rounded-lg  placeholder:font-light font-mono"
                  {...register("help", {
                    required: "please this input before you submite",
                  })}
                />
              </div>
              {errors.help ? (
                <div className="text-red-800">{errors.help.message} </div>
              ) : (
                ""
              )}
            </div>
            <span className="text-xs">
              By submitting you agree to receive SMS or e-mails for the provided
              channel. Rates may be applied.
            </span>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-blue-500 px-2 text-center flex items-center justify-center w-full py-3 text-white font-light font-mono  rounded-lg"
            >
              {loading ? <Loader className=" animate-spin" /> : "Submite"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Services;
