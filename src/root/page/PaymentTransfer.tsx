import HeaderBox from "@/components/HeaderBox";
import PaymentTransferForm from "@/components/PaymentTransferForm";


const PaymentTransfer =  () => {

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
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Virement de paiement"
        subtext="Veuillez fournir des détails ou des notes spécifiques concernant le transfert de paiement"
      />

      <section className="size-full pt-5">
      <PaymentTransferForm accounts={accounts} /> 
      </section>
    </section>
  );
};

export default PaymentTransfer;
