import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CardsPaymentMethod } from "./Payment";
import { Button } from "./ui/button";

const PaymentDialogue = () => {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger>
          <div className="payment-transfer_btn-box">
            <Button type="submit" className="payment-transfer_btn w-full">
              Transfer to external account
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white h-[90%] max-md:max-w-[95%] rounded-lg no-scrollbar overflow-auto">
          <CardsPaymentMethod />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentDialogue;
