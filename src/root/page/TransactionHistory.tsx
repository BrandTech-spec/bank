import { useUserStore } from "@/actions/zustand/userState";
import HeaderBox from "@/components/HeaderBox";
import TransactionsTable from "@/components/TransactionsTable";
import { formatAmount } from "@/lib/utils";

const TransactionHistory = () => {
  const account = [
    {
      id: "64f6s4sf868s6",
      availableBalance: 5555,
      currentBalance: 5555,
      officialName: "Manga Bless",
      mask: "pkoko",
      institutionId: "6fsv466rgs48s6sf64s6s46",
      name: "Bless",
      type: "string",
      subtype: "string",
      appwriteItemId: "x6gg565g4g898fgg489g464fg8fg",
      shareableId: "4g8g6b34bb896db7",
    },
    {
      id: "73g7g7tg939t7",
      availableBalance: 4444,
      currentBalance: 4444,
      officialName: "James Doe",
      mask: "jdoe",
      institutionId: "8hgt477hht48h7hg75g7h6",
      name: "James",
      type: "string",
      subtype: "string",
      appwriteItemId: "y7hh676h5h9799h9y7h5h6h5h5h5h",
      shareableId: "6h7h7h27cc989ec8",
    },
    {
      id: "92h9i9iu020i9",
      availableBalance: 3333,
      currentBalance: 3333,
      officialName: "Jane Smith",
      mask: "jsmith",
      institutionId: "9ikg588iij59i8ik86i8i8",
      name: "Jane",
      type: "string",
      subtype: "string",
      appwriteItemId: "z8ii787i6i8688i8z8i7i7i7i7i7i",
      shareableId: "7i8i8i38dd090fd9",
    },
    {
      id: "10j0j0jv131j0",
      availableBalance: 2222,
      currentBalance: 2222,
      officialName: "Alice Johnson",
      mask: "ajohnson",
      institutionId: "0jlj699jkl60j9jl97j9j9",
      name: "Alice",
      type: "string",
      subtype: "string",
      appwriteItemId: "a9jj898j7j9799j9a9j8j8j8j8j8j",
      shareableId: "8j9j9j49ee1a1ge1",
    },
    {
      id: "11k1k1kw242k1",
      availableBalance: 1111,
      currentBalance: 1111,
      officialName: "Bob Brown",
      mask: "bbrown",
      institutionId: "1klk710klm71k0km08k0k0",
      name: "Bob",
      type: "string",
      subtype: "string",
      appwriteItemId: "b0kk909k8k0800k0b0k9k9k9k9k9k",
      shareableId: "9k0k0k50ff2b2hf2",
    },
    {
      id: "12l2l2lx353l2",
      availableBalance: 6666,
      currentBalance: 6666,
      officialName: "Charlie Davis",
      mask: "cdavis",
      institutionId: "2lml821lmn82l1ln19l1l1",
      name: "Charlie",
      type: "string",
      subtype: "string",
      appwriteItemId: "c1ll010l9l1911l1c1l0l0l0l0l0l",
      shareableId: "0l1l1l61gg3c3ig3",
    },
  ];

  const transaction = [
    {
        id: "abcd1234",
        $id: "1234abcd",
        name: "Transaction1",
        paymentChannel: "Credit Card",
        type: "Purchase",
        accountId: "acc001",
        amount: 100.50,
        pending: false,
        category: "Groceries",
        date: "2025-01-01",
        image: "image_url_1",
        $createdAt: "2025-01-01T10:00:00Z",
        channel: "Online",
        senderBankId: "bank001",
        receiverBankId: "bank002"
    },
    {
        id: "efgh5678",
        $id: "5678efgh",
        name: "Transaction2",
        paymentChannel: "Debit Card",
        type: "Withdrawal",
        accountId: "acc002",
        amount: 200.00,
        pending: true,
        category: "ATM",
        date: "2025-01-02",
        image: "image_url_2",
        $createdAt: "2025-01-02T11:00:00Z",
        channel: "ATM",
        senderBankId: "bank003",
        receiverBankId: "bank004"
    },
    {
        id: "ijkl9012",
        $id: "9012ijkl",
        name: "Transaction3",
        paymentChannel: "Bank Transfer",
        type: "Transfer",
        accountId: "acc003",
        amount: 300.75,
        pending: false,
        category: "Utilities",
        date: "2025-01-03",
        image: "image_url_3",
        $createdAt: "2025-01-03T12:00:00Z",
        channel: "Mobile",
        senderBankId: "bank005",
        receiverBankId: "bank006"
    },
    {
        id: "mnop3456",
        $id: "3456mnop",
        name: "Transaction4",
        paymentChannel: "PayPal",
        type: "Purchase",
        accountId: "acc004",
        amount: 50.25,
        pending: true,
        category: "Entertainment",
        date: "2025-01-04",
        image: "image_url_4",
        $createdAt: "2025-01-04T13:00:00Z",
        channel: "Online",
        senderBankId: "bank007",
        receiverBankId: "bank008"
    },
    {
        id: "qrst7890",
        $id: "7890qrst",
        name: "Transaction5",
        paymentChannel: "Cheque",
        type: "Deposit",
        accountId: "acc005",
        amount: 1500.00,
        pending: false,
        category: "Salary",
        date: "2025-01-05",
        image: "image_url_5",
        $createdAt: "2025-01-05T14:00:00Z",
        channel: "Bank",
        senderBankId: "bank009",
        receiverBankId: "bank010"
    },
    {
        id: "uvwx1122",
        $id: "1122uvwx",
        name: "Transaction6",
        paymentChannel: "Wire Transfer",
        type: "Transfer",
        accountId: "acc006",
        amount: 250.00,
        pending: false,
        category: "Rent",
        date: "2025-01-06",
        image: "image_url_6",
        $createdAt: "2025-01-06T15:00:00Z",
        channel: "Online",
        senderBankId: "bank011",
        receiverBankId: "bank012"
    }
]
const user = useUserStore((state)=> state.user)
  return (
    <div className="transactions">
     
      <div className="transactions-header">
        <HeaderBox
          title="Historique des transactions"
          subtext="Voir vos détails bancaires et transactions"
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">
              {user?.firstName}
            </h2>
            <p className="text-14 text-blue-25">{`${user?.firstName} ${user?.lastName} `}</p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {account[1]?.mask}
            </p>
          </div>

          <div className="transactions-account-balance">
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">
              {formatAmount(account[1].currentBalance)}
            </p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable transactions={transaction} />
          {/*totalPages > 1 && (
            <div className="my-4 w-full">
              <Pagination totalPages={totalPages} page={currentPage} />
            </div>
          )*/}
        </section>
      </div>
    </div>
  );
};

export default TransactionHistory;
