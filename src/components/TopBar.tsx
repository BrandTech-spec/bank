import { Bell, BellOff, User2 } from "lucide-react";
import { ModeToggle } from "./Language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PasskeyModal } from "./table/PasskeyModal";
import { useGetNotification } from "@/actions/tanstack/query";
import { useUserStore } from "@/actions/zustand/userState";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Models } from "appwrite";

const Notification = ({ data }: { data: any }) => {
    const user = useUserStore((state) => state.user);
    const { data:notification, isPending } = useGetNotification(user?.userId);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Bell />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[400px] h-[500px] flex items-center justify-center mt-2 ring-blue-400  bg-gray-100 mr-11 right-1 shadow-2xl">
        {
          data.length !== 0 ?
          notification?.map((d:Models.Document, i) => (
            <div key={i} className="w-full px-2 py-2 flex items-center ">
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
          )):(
          <div className="flex items-center justify-center  flex-col">
          <BellOff className="w-40 h-36 text-gray-600 " />
          <p>No Nitification at the moment</p>
        </div>)
        }
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const TopBar = () => {
  return (
    <div className="w-full sticky inset-x-0 top-0 bg-white z-40 flex items-center justify-between py-3 px-10 max-md:hidden bg-transparent ">
      <div />
      <div className="text-black2-1 flex flex-row-reverse items-center justify-center gap-5 ">
       
        <Notification data={[]} />
        <PasskeyModal/>
        <ModeToggle />
        
      </div>
      
    </div>
  );
};

export default TopBar;
