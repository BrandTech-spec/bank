import { useGetTransaction } from "@/actions/tanstack/query";
import BankCard from "@/components/BankCard";
import { columns } from "@/components/CardDatialPageTable";

import { DataTableDemo } from "@/components/Table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Loader, Lock, Plus } from "lucide-react";



const BankDetailsPage = () => {
  const {data, isPending} = useGetTransaction("67a9cebe002e61a19adc")
  return (
    <div className="w-full min-h-screen space-y-4 py-9 overflow-hidden ">
      <div className="px-2 space-y-4">
        <h1 className="font-extrabold text-2xl">Détails de la carte</h1>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-5">
            <button className="px-2 py-2 hover:bg-opacity-40 bg-bankGradient rounded-md text-white"> <Plus className="lg:w-4 lg:h-4"  /> <p>  </p> </button>
            <button className="px-2 py-2 bg-gray-400 rounded-md text-white"> <CreditCard className="lg:w-4 lg:h-4"  /> <p></p> </button>
          </div>
          <div className=" flex items-center justify-center border-2 p-2 rounded-md">
            <Lock className="lg:w-4 lg:h-4"/>
          </div>
        </div> 
      </div>
      <section className="w-full flex flex-1 max-md:flex-col items-center justify-center ">
        <div className="lg:w-1/2 w-full px-2 flex flex-col gap-3  items-center justify-center">
          <div className="w-full items-center justify-center flex pr-10 ">
            <BankCard />
          </div>

          <Card className="  border-0 mt-10 shadow-none">
            <CardContent className="flex items-center justify-center w-full">
              <RadioGroup
                defaultValue="card"
                className="flex items-center justify-center gap-4"
              >
                <div className="w-full ">
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="peer sr-only"
                    aria-label="Card"
                  />
                  <Label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-md border-2 w-44 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground gap-4 py-6 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <p className="text-nowrap font-medium">Total Balance </p>
                    <span className="flex  font-bold  text-2xl  gap-2">
                      <h1 className="text-3xl mb-1">0.0</h1>{" "}
                      <h1 className="text-sm mb-1">USD</h1>
                    </span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="paypal"
                    id="paypal"
                    className="peer sr-only"
                    aria-label="Paypal"
                  />
                  <Label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-md  w-44  border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground gap-4 py-6 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <p className="text-nowrap font-medium">
                      Availaible Balance{" "}
                    </p>
                    <span className="flex  font-bold  text-2xl  gap-2">
                      <h1 className="text-3xl mb-1">0.0</h1>{" "}
                      <h1 className="text-sm mb-1">USD</h1>
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
        <div className=" w-full flex  overflow-x-auto flex-col px-4">
          <hr className="w-full " />
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="w-full flex items-center justify-center">
                Billing Address
              </AccordionTrigger>
              <AccordionContent className="">
                <div className=" px-2 py-2 rounded-md text-black space-y-4 bg-gray-100 border-2  ">
                  <div className="flex w-auto  items-center gap-2  ">
                    <span className="font-medium">Address 1:</span>{" "}
                    <p className="font-semibold">267 Chapman Road STE 105-4</p>
                   
                  </div>
                  <div className="flex w-auto items-center gap-2  ">
                    <span className="font-medium">City:</span>{" "}
                    <p className="font-semibold">267 Chapman Road STE 105-4</p>
                  </div>
                  <div className="flex w-auto items-center gap-2  ">
                    <span className="font-medium">State:</span>{" "}
                    <p className="font-semibold">267 Chapman Road STE 105-4</p>
                  </div>
                  <div className="flex w-auto items-center gap-2  ">
                    <span className="font-medium">Zipe Code:</span>{" "}
                    <p className="font-semibold">267 Chapman Road STE 105-4</p>
                  </div>
                  <div className="flex w-auto items-center gap-2  ">
                  <span className="font-medium">Country:</span>{" "}
                  <p className="font-semibold">Us</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div>
          <h1 className=" font-bold text-2xl my-3">Transactions</h1>
          {
            isPending ? <div className="w-full h-full flex items-center justify-center"><Loader className=" animate-spin w-5 h-5" /> </div>: <DataTableDemo data={data!} columns={columns}/>
          }
       
        </div>
          
        </div>
        
      </section>
    </div>
  );
};

export default BankDetailsPage;
