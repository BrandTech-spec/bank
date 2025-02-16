import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icons } from "./Icons";

export function CardsPaymentMethod() {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <Card className="grid gap-6 border-0 right-0 shadow-none  ">
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className=" overflow-y-auto no-scrollbar grid gap-6 border-0 right-0">
        <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
          <div>
            <RadioGroupItem
              value="card"
              id="card"
              className="peer sr-only"
              aria-label="Card"
            />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 h-6 w-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Card
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
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.paypal className="mb-3 h-6 w-6" />
              Paypal
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="apple"
              id="apple"
              className="peer sr-only"
              aria-label="Apple"
            />
            <Label
              htmlFor="apple"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary "
            >
              <Icons.apple className="mb-3 h-6 w-6" />
              Apple
            </Label>
          </div>
        </RadioGroup>
        <div className="grid gap-2">
          <Label htmlFor="name">Nom</Label>
          <Input className="input-class" id="name" placeholder="First Last" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">Ville</Label>
          <Input className="input-class" id="city" placeholder="" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="number">Card number</Label>
          <Input className="input-class" id="number" placeholder="" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">Code</Label>
          <Input className="input-class" id="city" placeholder="" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">Montant</Label>
          <Input className="input-class" id="city" placeholder="" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="month">Mois</Label>
            <Select>
              <SelectTrigger id="month" aria-label="Month">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {months.map((m) => (
                  <SelectItem key={m} className="hover:bg-gray-300" value="1">
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="year">Anne</Label>
            <Select>
              <SelectTrigger id="year" aria-label="Year">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent className="bg-white ">
                {Array.from({ length: 15 }, (_, i) => (
                  <SelectItem
                    className="hover:bg-gray-300"
                    key={i}
                    value={`${new Date().getFullYear() + i}`}
                  >
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-bankGradient text-white">Continue</Button>
      </CardFooter>
    </Card>
  );
}
