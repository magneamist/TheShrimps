import { Button } from "@/components/ui/button";
import { AlertDialogDemo } from "@/components/dialog-demo";
import { UserGreeting } from "@/components/user-greeting";

export default function Home() {
  return (
    <div>
      <UserGreeting />
      {/* <h1>Hi, {user.username || "User"} </h1> */}
      <Button variant="default">default</Button>
      <AlertDialogDemo />
    </div>
  );
}
