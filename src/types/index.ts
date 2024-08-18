import { z } from "zod";

export const userCreateSchema = z.object({
  email: z.string().email(),
  emailVerified: z.boolean().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  profilePictureUrl: z.string().optional(),
  username: z.string().min(1).max(30),
});

export type UserCreateInput = z.infer<typeof userCreateSchema>;
