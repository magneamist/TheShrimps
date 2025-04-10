import { SignOutButton } from "@clerk/nextjs";
import { getUserId } from "../data/queries";

import Header from "@/components/ui/header";
import Dropdowns from "@/components/ui/user";

export default async function UserInfo() {
  // const userDetails = await getUserDetails();
  // if (!userDetails) {
  //   return <div>Error fetching user details</div>;
  // }
  // const { firstName, lastName } = userDetails;
  // const fullName = `${firstName} ${lastName}`;
  // const profileImage = userDetails.profileImage || "/blank-profile.png";

  const userId = await getUserId();
  return (
    <>
      <h1>Hi, {userId}</h1>
      <SignOutButton />
      <Dropdowns />
    </>
  );
}
