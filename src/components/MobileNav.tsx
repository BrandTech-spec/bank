
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { MobileNavProps } from "@/types";


const MobileNav = ({ user }: MobileNavProps) => {

  const {pathname} = useLocation()

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <img
            src="/icons/hamburger.svg"
            alt="menu"
            className="cursor-pointer w-8 h-8"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link to="/" className="cursor-pointer flex items-center gap-1 px-4">
            <img 
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black2-1">Horizon Finance</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                  <SheetClose asChild key={item.route}>
                    <Link to={item.route} key={item.label}
                      className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                    >
                        <img 
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive
                          })}
                        />
                      <p className={cn("text-16 font-semibold text-black2-2", { "text-white": isActive })}>
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                )
              })}

              UTILISATEUR
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav