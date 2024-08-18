import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { user } from "@/server/db/schema";
import { generateShortUUID } from "@/utils/generate_short_uuid";
import { createUser } from "@/server/api/user/service";
import { UserCreateInput, userCreateSchema } from "@/types";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(userCreateSchema)
    .mutation(async ({ ctx, input }) => {
      console.log("ctx.headers", ctx.headers);

      return createUser(input);
    }),

  // Uncomment and adjust if you need a getLatest procedure
  // getLatest: publicProcedure.query(async ({ ctx }) => {
  //   const latestUser = await ctx.db.query.user.findFirst({
  //     orderBy: (users, { desc }) => [desc(users.createdTs)],
  //   });

  //   return latestUser ?? null;
  // }),
});
