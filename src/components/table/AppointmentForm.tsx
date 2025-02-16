import { zodResolver } from "@hookform/resolvers/zod";

import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "../ui/form";

import { Button } from "../ui/button";
import {  CreditCard, Key, Loader2 } from "lucide-react";

import { Models } from "appwrite";
import { toast, Toaster } from "sonner";
import { useSendNotifcation, useUpdateUser } from "@/actions/tanstack/mutasion";
import CustomFormField, { FormFieldType } from "../CustomFormField";

export const AppointmentForm = ({
  userId,
  patientId,
  type = "code",
  appointment,
  setOpen,
}: {
  userId: string;
  patientId: string;
  type: "amount" | "code" | "cancel";
  appointment?: Models.Document;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  //const navigate = useNavigate();
  //const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    amount: z
      .string()
      .min(2, "Reason must be at least 2 characters")
      .max(500, "Reason must be at most 500 characters")
      .optional(),
    code: z
      .string()
      .min(2, "Reason must be at least 2 characters")
      .max(500, "Reason must be at most 500 characters")
      .optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: appointment?.amount,
      code: "Bienvenu",
    },
  });
  const { mutateAsync: update, isPending: isUpdatingUser } = useUpdateUser();
  const { mutateAsync: sendNotification, isPending: isSendingNot } =
    useSendNotifcation();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);

    if (type === "amount") {
      //const value = Number(values.amount);
      const userData = {
        userId: patientId,
        amount: Number(values.amount),
      }
      let user = update(userData);
      if (!user) {
        return toast.error("échec de l'envoi");
      }
      toast.success("envoyé avec succès");
     
    } else {
      const data = {
        message: values.code!,
        userId: patientId,
      };
      let not = sendNotification(data);
      if (!not) {
        return toast.error("échec de l'envoi");
      }
      toast.success("envoyé avec succès");
      setOpen(false);
    }
  };

  return (
    <Form {...form}>
      <Toaster richColors />
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        {type === "amount" && (
          <section className="mb-12 space-y-4">
            <h1 className="header">Modifier le montant</h1>
            <p className="text-dark-700">
              Request a new appointment in 10 seconds.
            </p>
          </section>
        )}

        {type === "amount" ? (
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="amount"
            label="Montant"
            placeholder="45"
            iconSrc={<CreditCard />}
            iconAlt="amount"
          />
        ) : (
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="code"
            label="Code"
            placeholder="Bienvenu"
            iconSrc={<Key />}
            iconAlt="code"
          />
        )}

        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            disabled={isUpdatingUser || isSendingNot}
            className="form-btn"
          >
            {isUpdatingUser || isSendingNot ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
              </>
            ) : (
              "submite"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
