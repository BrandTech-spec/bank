import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Calendar, Loader,  } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


import { DataTableDemo } from "@/components/Table";
import { useGetTransaction } from "@/actions/tanstack/query";
import { cn, formatDate } from "@/lib/utils";
import { Models } from "appwrite";
import { CategoryBadgeProps } from "@/types";
import { transactionCategoryStyles } from "@/constants";


export interface Payment extends Models.Document  {
 
  status: "pending" | "processing" | "success" | "failed";

};

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const {
    borderColor,
    backgroundColor,
    textColor,
    chipBackgroundColor,
   } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
   
  return (
    <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
      <div className={cn('size-2 rounded-full', backgroundColor)} />
      <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
    </div>
  )
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
    accessorKey: "status",
    header: " Status",
    cell: ({ row }) => (
     
      <CategoryBadge category={row.getValue("status")} />
    ),
  },
  {
    accessorKey: "chennel",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Channel
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase text-black">{row.original.channel}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="text-left">Date</div>,
    cell: ({ row }) => {

      const payment = row.original.$createdAt
      console.log(payment);
      
         let date = formatDate(payment)
      return (
       <div className="flex items-center justify-center gap-4">
        <Calendar className="w-5 h-5"/>
        <span>
         {date}
        </span>
       </div>
      );
    },
  },
];

export const CardDetailPageTable = () => {
  const {data:transactions, isPending} = useGetTransaction("67a9cebe002e61a19adc")
  console.log("transactions",transactions);
  
  return !isPending ? <DataTableDemo data={transactions!} columns={columns} /> : <div className="w-full h-full flex items-center justify-center">
        <Loader className="w-8 h-8 "/>
  </div>
};
