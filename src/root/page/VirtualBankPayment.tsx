import HeaderBox from "@/components/HeaderBox";

import PaymentTransferForm from "@/components/PaymentTransferForm";

const VirtualBankPayment = () => {
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Virement de paiement"
        subtext="Veuillez fournir des détails ou des notes spécifiques concernant le transfert de paiement"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm />
      </section>
    </section>
  );
};

export default VirtualBankPayment;
