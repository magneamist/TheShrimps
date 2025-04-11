import { SignOutButton } from "@clerk/nextjs";
import Header from "@/components/ui/header";
import User from "@/components/ui/user-info";

export default async function UserInfo() {
  return (
    <>
      <Header title="User Information" />
      <User />
      <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 mb-4">
        <SignOutButton />
      </div>
    </>
  );
}
