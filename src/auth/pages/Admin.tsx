import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Loader2, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import Services from "@/components/Services";
import { DataTableDemo } from "@/components/Table";
import { Models } from "appwrite";
import { useGetAllUsers, useGetTransaction } from "@/actions/tanstack/query";
import {
  useDeleteUser,
  useSendNotifcation,
  useUpdateUser,
} from "@/actions/tanstack/mutasion";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export function AlertDialogDemo({
  open,
  isLoading,
  setOpen,
  type,
  row,
}: {
  open: boolean;
  isLoading?: boolean;
  setOpen: (P: boolean) => void;
  type: string;
  row: Models.Document;
}) {
  const [input, setInput] = useState("");
  const { mutateAsync: update, isPending:isUpdatingUser } =
    useUpdateUser();
  const { mutateAsync: sendNotification, isPending:isSendingNot } =
    useSendNotifcation();
  const updateSingleUser = () => {
    if (type === "amount") {
      if (input === "" || input.length === 0) return;
      const value = Number(input)
     
      let user = update(row.$id,value);
      if (!user) {
        return toast.error("failed to send");
      }
      toast.success("notification sent");
      setOpen(false)
    } else {
      if (input === "" || input.length === 0) return;
      const data = {
        message: input,
        userId: row?.userId,
      };
      let not = sendNotification(data);
      if (!not) {
        return toast.error("failed to send");
      }
      toast.success("notification sent");
      setOpen(false)
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Toaster richColors />
      <AlertDialogContent className="bg-white max-md:w-[90%]">
        <AlertDialogHeader className="w-full flex flex-col items-center justify-center">
          <Textarea
            onChange={(e) => setInput(e.target.value)}
            className="px-2 w-full"
            placeholder={
              type === "amount" ? "montant" : "envoyé une notification"
            }
          />
          <button
            onClick={() => updateSingleUser()}
            className="bg-bankGradient w-full  py-[8px] rounded-md flex items-center justify-center lg:w-[90%] text-white"
          >
            {isUpdatingUser || isSendingNot ? (
              <Loader2 className="w-6 h-6 text-white animate-spin" />
            ) : (
              "Continué"
            )}
          </button>
        </AlertDialogHeader>
        <AlertDialogFooter className="absolute top-2 right-2">
          <AlertDialogCancel>X</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export const columns: ColumnDef<Models.Document>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: () => {
      return <div>First Name</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header: () => {
      return <div>Last Name</div>;
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("lastName")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Last Transaction Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
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
    header: () => <div className="text-right">Total Balance</div>,
    cell: ({ row }) => {
      console.log(row.original);
      console.log(row.getValue("amount"));
      const [open, setOpen] = useState(false);
      const [type, setType] = useState("");

      const OpenAlertDialog = (value: string) => {
        setType(value);
        setOpen(true);
      };
      const amount = parseFloat(row.original?.amount);

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return (
        <>
          <AlertDialogDemo
            open={open}
            row={row?.original}
            type={type}
            setOpen={setOpen}
          />
          <div
            onClick={() => OpenAlertDialog("amount")}
            className="text-right font-medium"
          >
            {formatted}
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-left">Action</div>,
    cell: ({ row }) => {
      const openChart = useUserStore((state: any) => state.openChatFn);
      const payment = row.original;
      const { mutateAsync: deleteSingleUser } = useDeleteUser();
      const deleUser = () => {
        deleteSingleUser(row.original.$id);
      };

      const [open, setOpen] = useState(false);
      const [type, setType] = useState("");

      const OpenAlertDialog = (value: string) => {
        setType(value);
        setOpen(true);
      };

      return (
        <DropdownMenu>
          <AlertDialogDemo
            open={open}
            row={row?.original}
            type={type}
            setOpen={setOpen}
          />
          <Services />
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className=" ml-4 h-8 w-4 ">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white" align="end">
            <DropdownMenuLabel onClick={() => openChart()}>
              message
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => deleUser()}>
              suprimé l'utilisateur
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => OpenAlertDialog("notification")}>
              envoye une notification
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const AdminTable = () => {
  const { data, isPending } = useGetAllUsers();
  const user = useUserStore((state) => state.user);
  return isPending ? (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="text-bankGradient animate-spin" />
    </div>
  ) : (
    <DataTableDemo data={data!} columns={columns} />
  );
};
