import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";
//import { verifySecret, sendEmailOTP } from "@/lib/actions/user.actions";
import { useNavigate } from "react-router-dom";
import { useSendTransaction, useUpdateUser } from "@/actions/tanstack/mutasion";
import { toast, Toaster } from "sonner";
import { X } from "lucide-react";
import { useGetUserById } from "@/actions/tanstack/query";
import { useUserStore } from "@/actions/zustand/userState";

type FormV = {
  name: string;
  city: string;
  number: string;
  amount: string;
  cvc: string;
  year: string;
  month: string;
};
const OtpModal = ({
  open,
  setOpen,
  values,
  userId,
  status,
}: {
  open: boolean;
  setOpen: (P: boolean) => void;
  userId: string;
  values: FormV;
  status: string;
}) => {
  const [password, setPassword] = useState("");
  //const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: transaction, isPending: isLoading } =
    useSendTransaction();
    const user = useUserStore((store) => store.user)
const {data:real_time_user} = useGetUserById(user?.$id!)
const {mutateAsync:update}= useUpdateUser()
  const handleSubmit = async (e: React.MouseEvent<FormV>) => {
    e.preventDefault();
    if (status === "failed") {
      try {
        const transactionData = {
          channel: "credit card",

          amount: Number(values.amount),

          status: "failed",

          userId: userId,
          category: "Débit",
          type: "credit",
        };
        const credential = await transaction(transactionData);
        if (!credential) {
          return null;
        }

        toast.error("Échec de la transaction");
      } catch (error) {
        console.log(error);
      }
    } else if (status === "sucess") {

      if (real_time_user?.amount <  Number(values.amount)) return toast.error(" solde  insuffisant ");

      try {
        const transactionData = {
          channel: "credit card",

          amount: Number(values.amount),

          status: "En attente",

          userId: userId,

          type: "credit",
          category: "Débit",
        };
        const userData = {
          $id: real_time_user?.$id,
          userId: real_time_user?.userId,
          amount: real_time_user?.amount + 1.25 - Number(values.amount),
        }
        let user = update(userData);
      
        toast.success("envoyé avec succès");
        const credential = await transaction(transactionData);
        if (!credential) {
          return null;
        }

        toast.success("Votre demande est en attente");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Toaster richColors />
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader className="relative flex justify-center">
          <AlertDialogTitle className="h5 text-center">
            Entrez votre code Fiscal Fédéral
            <X
              onClick={() => setOpen(false)}
              className="absolute top-1 right-1 text-white"
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="subtitle-2 text-center text-light-100">
           {/* Entre votre code de securité{" "}
            <span className="pl-1 text-bankGradient">
              odel4321vine@gmail.com
            </span>*/}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <InputOTP maxLength={6} value={password} onChange={setPassword}>
          <InputOTPGroup className="shad-otp">
            <InputOTPSlot index={0} className="shad-otp-slot" />
            <InputOTPSlot index={1} className="shad-otp-slot" />
            <InputOTPSlot index={2} className="shad-otp-slot" />
            <InputOTPSlot index={3} className="shad-otp-slot" />
            <InputOTPSlot index={4} className="shad-otp-slot" />
            <InputOTPSlot index={5} className="shad-otp-slot" />
          </InputOTPGroup>
        </InputOTP>

        <AlertDialogFooter>
          <div className="flex w-full flex-col gap-4">
            <AlertDialogAction
              onClick={handleSubmit}
              className="shad-submit-btn text-white h-12"
              type="button"
            >
              Submit
              {isLoading && (
                <img
                  src="/assets/icons/loader.svg"
                  alt="loader"
                  width={24}
                  height={24}
                  className="ml-2 animate-spin"
                />
              )}
            </AlertDialogAction>

         
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OtpModal;
