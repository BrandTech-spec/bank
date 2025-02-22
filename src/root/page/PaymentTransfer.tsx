import HeaderBox from "@/components/HeaderBox";
import OtherPayment from "./OtherPayment";


const PaymentTransfer =  () => {

  
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Virement de paiement"
        subtext="Veuillez fournir des détails ou des notes spécifiques concernant le transfert de paiement"
      />

      <section className="size-full pt-5 lg:px-64">
      <OtherPayment  /> 
      </section>
    </section>
  );
};

export default PaymentTransfer;
