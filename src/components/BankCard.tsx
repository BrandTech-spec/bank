
import { Link } from "react-router-dom";
import Copy from "./Copy";
import { CreditCardProps } from "@/types";
import { useUserStore } from "@/actions/zustand/userState";

const BankCard = ({
  account,

}: CreditCardProps) => {
  const user = useUserStore((state)=> state.user)
  console.log(account);
  return (
    <div className="flex flex-col">
      <Link
        to={`/bank-card_details/${115155145155}`}
        className="bank-card"
      >
        <div className="bank-card_content">
          <div className="space-y-1">
            <h1 className="text-16 font-extrabold font-serif text-white">
              {account?.name || "Horizon Finance"}
            </h1>
            <div className="flex items-center gap-2">
              <img
                src={user?.sim}
                alt="lines"
                className=" w-10 h-10 rounded-lg"
              />
              <p className="font-ibm-plex-serif font-black2 text-white"/>
              
            
            </div>
            
          </div>
     {/*********** card number****************** */}
          <article className="flex flex-col-reverse gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold font-mono text-white">894</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold text-nowrap  text-white">
              ●●●● ●●●● ●●●●{" "}
              <span className="text-16">{account?.mask || 6985}</span>
            </p>
          </article>
     
     {/*********** card holder****************** */}
          <h1 className="text-white text-nowrap">
            XXXXXX TANGWE
          </h1>
        </div>
       {/*// https://fyatu.com/wp-content/uploads/2024/03/ic_visa.png */}
        <div className="bank-card_icon">
          <img src={"/icons/Paypass.svg" } alt="pay" className="w-10 h-12" />
          <img
            src="https://fyatu.com/wp-content/uploads/2024/03/Mastercard-Logo-1-1.png"
            alt="mastercard"
            className="ml-5 w-45 w-32"
          />
        </div>

        <img
          src={user?.line}
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0 w-[300] h-[190] "
        />
      </Link>

     <Copy title={"4664446464848484464644866"} />
    </div>
  );
};

export default BankCard;
