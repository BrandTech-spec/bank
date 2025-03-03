import { useGetTransaction } from "@/actions/tanstack/query"
import { useUserStore } from "@/actions/zustand/userState"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { transactionCategoryStyles } from "@/constants"
import { cn, formatAmount, formatDate, formatDateTime, getTransactionStatus, removeSpecialCharacters } from "@/lib/utils"
import { CategoryBadgeProps, Transaction, TransactionTableProps } from "@/types"
import { Models } from "appwrite"
import { Loader2 } from "lucide-react"

 const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const {
    borderColor,
    backgroundColor,
    textColor,
    chipBackgroundColor,
   } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default
   
  return (
    <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
      <div className={cn('size-2 rounded-full', `${category === 'failed' ?
                  'bg-[#f04438]'
                  : category === 'sucess' ? 'bg-[#039855]' :"bg-orange-700"
              }`)} />
      <p className={cn('text-[12px] font-medium', `${category === 'failed' ?
                  'text-[#f04438]'
                  : category === 'sucess' ? 'text-[#039855]' :"text-orange-700"
              }`)}>{category}</p>
    </div>
  )
} 

const TransactionsTable = () => {
  const user = useUserStore((state)=> state.user)
  const {data:transactions, isPending} = useGetTransaction(user?.userId)

  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Transaction</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 ">Channel</TableHead>
          <TableHead className="px-2 ">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions?.map((t:Models.Document, i) => {
//const status = getTransactionStatus(new Date(t.date))
          const amount = formatAmount(t?.amount)

          const isDebit = t?.type === 'debit';
          const isCredit = t?.type === 'credit';

          return isPending ? <Loader2/> :  (
            <TableRow key={t?.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT`}>
              <TableCell className="max-w-[250px] pl-2 pr-10">
                <div className="flex items-center gap-3">
                  <h1 className="text-14 truncate font-semibold text-[#344054]">
                    Transaction{" "}{i+1}
                  </h1>
                </div>
              </TableCell>

              <TableCell className={`pl-2 pr-10 font-semibold ${
                isDebit || amount[0] === '-' ?
                  'text-[#f04438]'
                  : 'text-[#039855]'
              }`}>
                {isDebit ? `-${amount}` : isCredit ? amount : amount}
              </TableCell>

              <TableCell className="pl-2 pr-10">
                <CategoryBadge category={t?.status} /> 
              </TableCell>

              <TableCell className="min-w-32 pl-2 pr-10">
                {formatDate(t?.$createdAt)}
              </TableCell>

              <TableCell className="pl-2 pr-10 capitalize min-w-24">
               {t?.channel}
              </TableCell>

             
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default TransactionsTable