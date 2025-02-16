
import { ColumnDef } from "@tanstack/react-table";


//import { StatusBadge } from "./StatusBadge";
import { AppointmentModal } from "./AppointmentModal";
import { Models } from "appwrite";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

  {/*
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status="pending" />
        </div>
      );
    },
  */}
export const columnsB: ColumnDef<Models.Document>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
{
  accessorKey: "firstName",
  header: () => {
    return <div>nom</div>;
  },
  cell: ({ row }) => (
    <div className="lowercase">{row.getValue("firstName")}</div>
  ),
},
{
  accessorKey: "lastName",
  header: () => {
    return <div>Prenom</div>;
  },
  cell: ({ row }) => (
    <div className="lowercase">{row.getValue("lastName")}</div>
  ),
},

{
  accessorKey: "email",
  header: ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown />
      </Button>
    );
  },
  cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
},
{
  accessorKey: "amount",
  header: () => <div className="text-right">Solde total</div>,
  cell: ({ row }) => {

    const amount = parseFloat(row.original?.amount);

    // Format the amount as a dollar amount
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(amount);

    return (
      <>
        
        <div
          className="text-right font-medium"
        >
          {formatted}
        </div>
      </>
    );
  },
},

  

  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const appointment = row?.original;

      return (
        <div className="flex gap-1">
          <AppointmentModal
            patientId={appointment?.$id}
            userId={appointment?.userId}
            appointment={appointment}
            type="amount"
            title="Modifier le Montant"
            description="Modifier le montant d'un utilisateur."
          />
          <AppointmentModal
            patientId={appointment.patient?.$id}
            userId={appointment?.userId}
            appointment={appointment}
            type="code"
             title="Envoyé des Notification"
            description="Envoyé des notification a un utiliateur de votre choix"
          />

        </div>
      );
    },
  },
];