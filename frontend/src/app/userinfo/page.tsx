import { UserButton, SignOutButton } from "@clerk/nextjs";

export default function UserInfo() {
  return (
    <div>
      <h1>User Info</h1>
      <SignOutButton />
    </div>
  );
}
