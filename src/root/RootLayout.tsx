import { useUserStore } from "@/actions/zustand/userState";
import { ModeToggle } from "@/components/Language";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { PasskeyModal } from "@/components/table/PasskeyModal";
import TopBar from "@/components/TopBar";
import { Bell } from "lucide-react";
import { Link, Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const user = useUserStore((state: any) => state.user);
  return user ? (
    <main className="flex h-screen relative w-full font-inter">
      <Sidebar />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <img src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div className="flex items-center  justify-centerv gap-4">
            <div className="text-black2-1 flex flex-row-reverse items-center justify-center gap-5 ">
              <Link to={"/notification"}>
                <Bell />{" "}
              </Link>
              <ModeToggle />
              <div>
                <PasskeyModal />
              </div>
            </div>
            <MobileNav />
          </div>
        </div>
        <div className="relative w-full h-full">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </main>
  ) : (
    <Navigate to={"/home"} />
  );
};

export default RootLayout;
