import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";



import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { PaymentTransferFormProps } from "@/types";

import PaymentDialogue from "./PaymentDialogue";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useSendTransaction } from "@/actions/tanstack/mutasion";
import { useUserStore } from "@/actions/zustand/userState";
import { toast, Toaster } from "sonner";
import OtpModal from "./OTPModal";

const formSchema = z.object({
  email: z.string().email("Adresse e-mail invalide"),
  name: z.string().min(4, "La note de transfert est trop courte"),
  amount: z.string().min(2, "Amount is too short"),
  sharableId: z.string().min(8, "Le numéro de carte est requis "),
});

function AlertDialogDemo({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (P: boolean) => void;
}) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-white max-md:w-[95%]">
        <AlertDialogHeader>
          <AlertDialogTitle>Transfert de fonds</AlertDialogTitle>
          <AlertDialogDescription>
            Vous n'êtes pas éligible pour effectuer cette transaction. Veuillez
            contacter le service client pour plus d'informations.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const PaymentTransferForm = ({ accounts }: PaymentTransferFormProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: "",
      sharableId: "",
      
    },
  });

  const { mutateAsync: transaction, isPending: isLoading } =
    useSendTransaction();
 const user = useUserStore((state)=> state.user)
  const submit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);

    if(data.code && data.code === user?.code ){
      const transactionData = {
        channel: "credit card",
  
        amount: Number(data.amount),
  
        status: "succes",
  
        userId: user?.$id,
  
        type: "credit",
      };
      const credential = transaction(transactionData)
      if (!credential) {
        return null
      }

      toast.success("Transaction réussie")
    }else if(!user?.code || user?.code == null || user.code ==="" ){
      setOpen(true)
      
        const transactionData = {
          channel: "credit card",
    
          amount: Number(data.amount),
    
          status: "failed",
    
          userId: user?.$id,
    
          type: "credit",
        };
        const credential = transaction(transactionData)
        if (!credential) {
          return null
        }
  
        toast.error("Transaction réussie")
    }
  };

  return (
    <Form {...form}>
      <Toaster richColors />
      <OtpModal open={open} setOpen={setOpen} />
      <form onSubmit={form.handleSubmit(submit)} className="flex flex-col">
        {/* <FormField
          control={form.control}
          name="senderBank"
          render={() => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                  <FormLabel className="text-14 font-medium text-gray-700">
                    Sélectionner la banque source
                  </FormLabel>
                  <FormDescription className="text-12 font-normal text-gray-600">
                    Sélectionnez le compte bancaire à partir duquel vous
                    souhaitez transférer des fonds
                  </FormDescription>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <BankDropdown
                      accounts={accounts}
                      setValue={form.setValue}
                      otherStyles="!w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />*/}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-6 pt-5">
                <div className="payment-transfer_form-content">
                  <FormLabel className="text-14 font-medium text-gray-700">
                    Note de transfert (optionnelle)
                  </FormLabel>
                  <FormDescription className="text-12 font-normal text-gray-600">
                    Veuillez fournir toute information ou instruction
                    supplémentaire concernant le transfert
                  </FormDescription>
                </div>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Textarea
                      placeholder="Write a short note here"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <div className="payment-transfer_form-details">
          <h2 className="text-18 font-semibold text-gray-900">
            Détails du compte bancaire
          </h2>
          <p className="text-16 font-normal text-gray-600">
            Enter the bank account details of the recipient
          </p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item py-5">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Adresse e-mail du destinataire
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="ex: johndoe@gmail.com"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sharableId"
          render={({ field }) => (
            <FormItem className="border-t border-gray-200">
              <div className="payment-transfer_form-item pb-5 pt-6">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Numéro de carte
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="Enter the public account number"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="border-y border-gray-200">
              <div className="payment-transfer_form-item py-5">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Montant
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="ex: 5.00"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />

        {/*<FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className="border-y border-gray-200">
              <div className="payment-transfer_form-item py-5">
                <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
                  Code
                </FormLabel>
                <div className="flex w-full flex-col">
                  <FormControl>
                    <Input
                      placeholder="ex: 5.00"
                      className="input-class"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-12 text-red-500" />
                </div>
              </div>
            </FormItem>
          )}
        />*/}

        <div className="payment-transfer_btn-box">
          <Button type="submit" className="payment-transfer_btn">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Sending...
              </>
            ) : (
              "Transférer des fonds"
            )}
          </Button>
        </div>
      </form>
      <PaymentDialogue />
      {/*<AlertDialogDemo open={open} setOpen={setOpen} /> */}
    </Form>
  );
};

export default PaymentTransferForm;
