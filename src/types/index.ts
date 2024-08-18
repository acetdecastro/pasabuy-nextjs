import { type db } from "@/server/db";
import { z } from "zod";

export const userCreateSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  emailVerified: z.boolean().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  profilePictureUrl: z.string().optional(),
  username: z.string().min(1).max(30).optional(),
});

export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type Database = typeof db;
