import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { type Database, type UserCreateInput } from "@/types";
import { eq } from "drizzle-orm";

export async function getById(db: Database, id: string) {
  const foundUser = await db.query.users.findFirst({
    where: eq(users.id, id),
  });

  return foundUser ? foundUser : null;
}

export async function create(db: Database, input: UserCreateInput) {
  const newUser = await db.insert(users).values({
    id: input.id,
    email: input.email,
    emailVerified: input.emailVerified ?? false,
    firstName: input.firstName ?? "",
    lastName: input.lastName ?? "",
    profilePictureUrl: input.profilePictureUrl ?? "",
    username: input.username,
  });

  return newUser;
}
