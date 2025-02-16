import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <section className="sidebar sticky left-0 inset-y-0 ">
       
      <nav className="flex flex-col gap-4">
        <Link to="/" className="mb-12 z-50 cursor-pointer flex items-center gap-2">
          <img
            src="./icons/logo.svg"
            alt="Horizon logo"
            className="size-[24px] w-34 h-34 max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              to={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <img
                  src={item.imgURL}
                  alt={item.label}
               
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                <FormattedMessage
                  id={item.label}
                  defaultMessage="Good morning {name}"
                  values={{ name: 'John'}}
                />
              </p>
            </Link>
          );
        })}

        
      </nav>

      <Footer  />
  
    </section>
  );
};

export default Sidebar;
