import { useUserStore } from "@/actions/zustand/userState";
import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Services from "./Services";
import { useGetTransaction, useGetUserById } from "@/actions/tanstack/query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdmine } from "@/actions/appwrite/userActions";
import { Models } from "appwrite";


const DashBoard = () => {
  const accounts = [
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
const navigate = useNavigate()
const [isLoading, setIsLoading] = useState(false);
const [admin, setAdmin] = useState<Models.Document>([])


const user = useUserStore((state) =>state.user)
const {data} = useGetTransaction(user?.userId)
const getAdmin = async()=>{
   const admin = await getAdmine()
   setAdmin(admin)
   console.log("this is the admine user",admin);
   
}

useEffect(() => {
  getAdmin()


}, [])

const {data:real_time_user} = useGetUserById(user?.$id!)

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Bienvenue "
            user={`${user?.firstName} ${user?.lastName}`  }
            subtext="Accédez et gérez votre compte et vos transactions efficacement"
          />

          <TotalBalanceBox
            accounts={accounts}
            totalBanks={506.88}
            totalCurrentBalance={real_time_user?.amount}
          />
        </header>
        <RecentTransactions
          accounts={accounts}
          transactions={data!}
          appwriteItemId={"nlvldv9dvz6zzz8zz8"}
          page={1}
        />
        
      </div>
      <RightSidebar user={user!} />
      
    </section>
  );
};

export default DashBoard;
