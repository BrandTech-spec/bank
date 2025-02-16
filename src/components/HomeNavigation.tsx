import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator"

const HomeNavigation = () => {
  const types = {
    MODAL: "modal",
    LINK: "link",
  };

  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("Savings");
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

  return (
    <DropdownMenu  >
      <DropdownMenuTrigger>
      <img
            src="/icons/hamburger.svg"
            alt="menu"
            className="cursor-pointer w-8 h-8"
          />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-dark-300 text-white w-[90% ] " >
        <div className="flex items-start pl-3  flex-col justify-center gap-3 text-xs font-bold">
          {routs.map((rout) => {
            if (rout.type === types.LINK) {
              return (
                <Link className="cursor-pointer" key={rout.name} to={rout.path}>
                  <p>{rout.name}</p>
                  <Separator />
                </Link>
              );
            } else if (rout.type === types.MODAL) {
              return (
                <DropdownMenu
            
                  key={rout.name}
                >
                  <DropdownMenuTrigger className="outline-none border-0 ring-0 cursor-pointer">
                    {rout.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white px-4">
                    {rout.subPaths.map((path, i) => (
                      <Link
                        key={i}
                        to={path.path}
                        className={`space-y-2 hover:bg-blue-300 ${
                          path.path.includes(style) && "bg-blue-400"
                        }`}
                      >
                        <DropdownMenuLabel>{path.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator
                          className={`bg-gray-200 text-gray-200 ${
                            i === rout.subPaths.length - 1 && "hidden"
                          } `}
                        />
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HomeNavigation;
