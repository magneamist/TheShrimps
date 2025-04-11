import { UserDetailModel } from "../models/userDetailModel.js";

export async function getOrCreateUser(user) {
  if (!user) return null;

  let dbUser = await UserDetailModel.findOne({
    where: { clerk_user_id: user.id },
  });

  if (!dbUser) {
    dbUser = await UserDetailModel.create({
      clerk_user_id: user.id,
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.emailAddresses[0].emailAddress,
      profile_image: user.imageUrl
    });
  }

  return dbUser;
}
