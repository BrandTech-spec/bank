"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";



import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { Form } from "../ui/form";
import { Models } from "appwrite";
import { getAppointmentSchema } from "@/lib/utils";
import { useSendNotifcation, useUpdateUser } from "@/actions/tanstack/mutasion";
import { toast, Toaster } from "sonner";

export const AppointmentForm = ({
  userId,
  patientId,
  type,
  appointment,
  setOpen,
}: {
  userId: string;
  patientId: string;
  type:  "schedule" | "cancel";
  appointment?: Models.Document;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const {mutateAsync:update, isPending:isUpdatingUser}=useUpdateUser()
  const AppointmentFormValidation = getAppointmentSchema(type);
  const {mutateAsync:notification, isPending}=useSendNotifcation()

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      amount: appointment ? appointment?.amount : "" ,
      code: appointment ?  appointment?.code : "",
      notification: "",
      
    },
  });

  const onSubmit = async (
    values: z.infer<typeof AppointmentFormValidation>
  ) => {
    setIsLoading(true);

    let status;
    switch (type) {
      case "schedule":
        status = "scheduled";
        break;
      case "cancel":
        status = "cancelled";
        break;
      default:
        status = "pending";
    }

    try {
      if (type !== "schedule" && patientId){
        const appointmentToUpdate = {
         
          userId:patientId && patientId,
          message: values.notification,
          
          
        };

        const updatedAppointment = await notification(appointmentToUpdate);

        if (!updatedAppointment) {
          return toast.error("echec de l'envoi")
        }
        form.reset()
        toast.success("notification envoyé")
      }  else {
        const appointment = {
          $id:userId,
          userId:patientId,
          amount: Number(values.amount),
          code:values.code
          
        };

        const newAppointment = await update(appointment);
        if (!newAppointment) {
          return toast.error("echec de la modification")
        }
      
        toast.success("success")
        form.reset()
      } 
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  let buttonLabel;
  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;
    default:
      buttonLabel = "Submit Apppointment";
  }

  return (
    <Form {...form}>
      <Toaster richColors />
      <form onSubmit={form.handleSubmit(onSubmit) } className="flex-1 space-y-6">
        {/*type === "schedule" && (
          <section className="mb-12 space-y-4">
            <h1 className="header">New Appointment</h1>
            <p className="text-dark-700">
              Request a new appointment in 10 seconds.
            </p>
          </section>
        )*/}

        {type !== "cancel" && (
          <>



            <div
              className={`flex flex-col gap-6  ${type === "schedule" && "xl:flex-row"}`}
            >
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="amount"
                label="montant"
                placeholder="Montant du transfer"
                disabled={type === "schedule"}
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="code"
                label="code"
                placeholder="code secrete"
                disabled={type === "schedule"}
              />
            </div>
          </>
        )}

        {type === "cancel" && (
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="notification"
            label="notification"
            placeholder="Envoyé une notification"
          />
        )}

        <SubmitButton
          isLoading={isPending ||isUpdatingUser}
          className={`${type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"} w-full`}
        >
          {buttonLabel}
        </SubmitButton>
      </form>
    </Form>
  );
};
