import { SignOutButton } from "@clerk/nextjs";
import { getUserId } from "../data/queries";

import Header from "@/components/ui/header";
import User from "@/components/ui/user";
import { Children } from "react";

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
      <Header title="User Information"/>
      <User />
      <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 mb-4">
        <SignOutButton />
      </div>
    </>
  );
}
