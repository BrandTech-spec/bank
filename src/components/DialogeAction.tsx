import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const Action = ({ values }:{ values:string}) => {
  switch (values) {
    case "message":
      return (
        <p>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.{" "}
        </p>
      );
      break;
    case "message":
      return <Textarea placeholder="Envoyé une notification." />;
      break;
    case "message":
      return  <Input type="text" placeholder="Montant" />
      break;
    default:
      break;
  }
};
export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Êtes-vous absolument sûr(e) ?</AlertDialogTitle>
          <AlertDialogDescription>
            <Action values="kkbk" />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
