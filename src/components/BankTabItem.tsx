

import { cn } from "@/lib/utils";
import { BankTabItemProps } from "@/types";

export const BankTabItem = ({ account, appwriteItemId }: BankTabItemProps) => {

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {

  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(`banktab-item`, {
        " border-blue-600": isActive,
      })}
    >
      <p
        className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
          " text-blue-600": isActive,
        })}
      >
        {account.name}
      </p>
    </div>
  );
};
