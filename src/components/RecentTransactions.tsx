
import BankInfo from "./BankInfo";
import TransactionsTable from "./TransactionsTable";
import { Pagination } from "./Pagination";
import { Link } from "react-router-dom";
import { Account } from "@/types";
import { Models } from "appwrite";

const RecentTransactions = ({
  accounts,
  transactions,
  appwriteItemId,
  page = 1,
}: {
  accounts: Account[];
  transactions: Models.Document[];
  appwriteItemId: string;
  page: number;
}) => {
  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions?.length / rowsPerPage);

  const indexOfLastTransaction = page * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Transactions récentes</h2>
        <Link
          to={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      
            <BankInfo
              account={accounts[0]}
              appwriteItemId={accounts[0]?.appwriteItemId}
              type="full"
            />

            <TransactionsTable />

            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={1} />
              </div>
            )}
          
    </section>
  );
};

export default RecentTransactions;
