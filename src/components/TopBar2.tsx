import { Link } from "react-router-dom";
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
import { LogIn } from "lucide-react";
const TopBar2 = () => {
  const types = {
    MODAL: "modal",
    LINK: "link",
  };
  const routs = [
    { name: "Accueil", path: "", type: types.LINK, subPaths: [] },
    { name: "À propos de nous", path: "about", type: types.LINK, subPaths: [] },
    {
      name: "Banque personnelle",
      path: "personal-banking/savings",
      type: types.MODAL,
      subPaths: [
        { name: "Économies", path: "personal-banking/savings" },
        { name: "Comptes courants", path: "personal-banking/checking" },
        { name: "Investissement & Retraite", path: "personal-banking/pension" },
        { name: "Carte de crédit", path: "personal-banking/card" },
      ],
    },
    {
      name: "Banque d'affaires",
      path: "business-banking/savings",
      type: types.MODAL,
      subPaths: [
        { name: "Économies", path: "business-banking/checking" },
        { name: "Comptes courants", path: "business-banking/checking" },
        { name: "Investissement & Retraite", path: "business-banking/checking" },
        { name: "Carte de crédit", path: "business-banking/checking" },
      ],
    },
    { name: "Contactez-nous", path: "/contact-us", type: types.LINK, subPaths: [] },
];


  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("Savings")
  return (
    <div className=" flex items-center justify-between px-5 lg:px-20 lg:py-16 z-50  gap-5 fixed top-0 inset-x-0 ring-1 bg-white ring-white">
      <div>
        <Link
          to="/home"
          className=" z-50 cursor-pointer flex items-center gap-2"
        >
          <img src="./images/logo.svg" alt="" />
        </Link>
      </div>
      <div className="flex max-md:hidden items-center justify-center gap-3 text-xs font-bold">
        {routs.map((rout) => {
          if (rout.type === types.LINK) {
            return (
              <Link className="cursor-pointer" key={rout.name} to={rout.path}>
                {rout.name}
              </Link>
            );
          } else if (rout.type === types.MODAL) {
            return (
              <DropdownMenu key={rout.name}>
                <DropdownMenuTrigger className="outline-none border-0 ring-0 cursor-pointer">{rout.name}</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white px-4">
                  {rout.subPaths.map((path, i) => (
                    <Link key={i} to={path.path} className={`space-y-2 hover:bg-blue-300 ${path.path.includes(style) && "bg-blue-400"}`} >
                      <DropdownMenuLabel>{path.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator className={`bg-gray-200 text-gray-200 ${i === rout.subPaths.length-1 && "hidden"} `} />
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }
        })}
      </div>
 <Link to="/sign-up " className="btn max-md:hidden">Sign Up</Link>

<section className="flex items-center lg:hidden  justify-center gap-3">
  <Link to="/sign-up " className="btn"><LogIn/></Link>
  <div className="">
          <HomeNavigation/>
      </div>
</section>
      
     

      
    
    </div>
  );
};

export default TopBar2;
