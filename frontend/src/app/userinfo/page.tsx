import { SignOutButton } from "@clerk/nextjs";
import { getUserId } from "../data/queries";

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
    <div>
      <h1>Hi, {userId}</h1>
      <SignOutButton />
    </div>
  );
}
