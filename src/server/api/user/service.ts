import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { type UserCreateInput } from "@/types";
import { generateShortUUID } from "@/utils/generate_short_uuid";

export async function createUser(input: UserCreateInput) {
  const newUser = await db.insert(user).values({
    id: generateShortUUID(),
    email: input.email,
    emailVerified: input.emailVerified ?? false,
    firstName: input.firstName ?? "",
    lastName: input.lastName ?? "",
    profilePictureUrl: input.profilePictureUrl ?? "",
    username: input.username,
  });

  return newUser;
}
