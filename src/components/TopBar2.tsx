import { Link, NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import HomeNavigation from "./HomeNavigation";
const TopBar2 = () => {
  const types = {
    MODAL: "modal",
    LINK: "link",
  };
  const routs = [
    { name: "Home", path: "/home", type: types.LINK, subPaths: [] },
    { name: "About Us", path:"/about", type: types.LINK, subPaths: [] },
    {
      name: "Personal Banking",
      path: "",
      type: types.MODAL,
      subPaths: [
        { name: "Savings", path:"/personal-banking/savings" },
        { name: "Checkings", path:"/personal-banking/checking" },
        { name: "Investment & Retirement", path:"/personal-banking/pension" },
        { name: "Credit Card", path:"/personal-banking/card" },
      ],
    },

    { name: "Contact Us", path: "/contact-us", type: types.LINK, subPaths: [] },
    { name: "Sign up", path: "/sign-up", type: types.LINK, subPaths: [] },
    { name: "Sign in", path: "/sign-in", type: types.LINK, subPaths: [] },
  ];

  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("Savings")
  return (
    <div className=" flex items-center justify-between py-3 px-2 lg:px-20 z-50  gap-5 fixed top-0 inset-x-0 bg-si text-gray-400">
      <div>
        <Link
          to="/home"
          className="mb-12 z-50 cursor-pointer flex items-center gap-2"
        >
          <img
            src="./icons/logo.svg"
            alt="Horizon logo"
            className="size-[24px] w-34 h-34 max-xl:size-14"
          />
          <h1 className=" h6 font-bold  text-s5">Horizon Finance</h1>
        </Link>
      </div>
      <div className="flex max-md:hidden items-center justify-center gap-3 text-xs font-bold">
        {routs.map((rout) => {
          if (rout.type === types.LINK) {
            return (
              <NavLink className="cursor-pointer" key={rout.name} to={rout.path}>
                {rout.name}
              </NavLink>
            );
          } else if (rout.type === types.MODAL) {
            return (
              <DropdownMenu key={rout.name}>
                <DropdownMenuTrigger className="outline-none border-0 ring-0 cursor-pointer">{rout.name}</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white px-4">
                  {rout.subPaths.map((path, i) => (
                    <NavLink key={i} to={path.path} className={`space-y-2 hover:bg-blue-300 ${path.path.includes(style) && "bg-blue-400"}`} >
                      <DropdownMenuLabel>{path.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator className={`bg-gray-200 text-gray-200 ${i === rout.subPaths.length-1 && "hidden"} `} />
                    </NavLink>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }
        })}
      </div>

      <div className="lg:hidden mb-12 md:block">
          <HomeNavigation/>
      </div>
    
    </div>
  );
};

export default TopBar2;
