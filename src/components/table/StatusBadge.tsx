import clsx from "clsx";

//import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: string }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pendin",
        "bg-red-600": status === "cancelled",
      })}
    >
      <img
        src={`/assets/icons/${status}.svg`}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-500": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};
