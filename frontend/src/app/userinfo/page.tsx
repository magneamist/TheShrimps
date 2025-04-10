import { SignOutButton } from "@clerk/nextjs";

export default async function UserInfo() {
  // const userDetails = await getUserDetails();
  // if (!userDetails) {
  //   return <div>Error fetching user details</div>;
  // }
  // const { firstName, lastName } = userDetails;
  // const fullName = `${firstName} ${lastName}`;
  // const profileImage = userDetails.profileImage || "/blank-profile.png";

  return (
    <div>
      <h1>Hi,</h1>
      <SignOutButton />
    </div>
  );
}
