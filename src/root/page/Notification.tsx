import { useGetNotification } from "@/actions/tanstack/query";
import { useUserStore } from "@/actions/zustand/userState";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, User2 } from "lucide-react";

const Notification = () => {
  const user = useUserStore((state) => state.user);
  const { data, isPending } = useGetNotification(user?.userId);
   console.log("notifications", data);
   
  if (isPending) {
    return (
      <div className="w-full h-screen items-center justify-center flex ">
        <span>
          <Loader2 className=" animate-spin text-blue-700" />
        </span>
      </div>
    );
  }
  return (
    <div className="w-full h-full px-3 space-y-3  ">
      {data?.map((d, i) => (
        <div key={i} className="w-full px-2 py-2 flex gap-2 rounded-md bg-black bg-opacity-20 items-center ">
          <Avatar className="bg-bankGradient">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback className=" uppercase font-bold text-white ">
              <User2 />
            </AvatarFallback>
          </Avatar>
          <p>
            {d?.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
