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

import { ChangeEvent, useState } from "react";
import { toast, Toaster } from "sonner";
import { useGetUserById } from "@/actions/tanstack/query";
import { useUserStore } from "@/actions/zustand/userState";

import { useSendTransaction } from "@/actions/tanstack/mutasion";
import { FileUploader } from "../FileUploader";

 function SubmiteFile() {
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
 
  const onSubmite =  (e: ChangeEvent<HTMLInputElement>) => {
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

    if (real_time_user?.code === null || real_time_user?.code === "" || real_time_user?.code === " ") {
      setOpen(true);
      setStatus("failed")
    }else if(real_time_user?.code || real_time_user?.code !== "" || real_time_user?.code !==null || real_time_user?.code?.length >0  ){
      setOpen(true);
      setStatus("sucess")
    }
  };

  return (
    <Card className="grid gap-6 border-0 right-0 shadow-none  ">

      <Toaster richColors />
      <CardHeader>
        <CardTitle>Méthode de paiement</CardTitle>
        <CardDescription>
          Ajoutez un nouveau mode de paiement à votre compte.
        </CardDescription>
      </CardHeader>
      <CardContent className=" overflow-y-auto no-scrollbar grid gap-6 border-0 right-0">
       
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
                      onChange={() => setFormValues({ ...formValues, month:months[i]})}
                    >
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
         
            <div className="grid gap-2">
              <FileUploader/>
            </div>

            <div className="grid gap-2">
              <FileUploader/>
            </div>
               
          <Button className="w-full bg-bankGradient text-white">
            Continue
          </Button>
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default SubmiteFile