
import { Globe,} from "lucide-react";


import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {

    const changeLanguage = (lag:string)=>{
        console.log(lag);
        
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white ring-1 ring-blue-300" align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          english
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("fr")}>
          french
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
