import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { create, getById as getById } from "@/server/api/user/service";
import { userCreateSchema } from "@/types";

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await getById(ctx.db, input.id);
    }),

  create: publicProcedure
    .input(userCreateSchema)
    .mutation(async ({ ctx, input }) => {
      return await create(ctx.db, input);
    }),

  // Uncomment and adjust if you need a getLatest procedure
  // getLatest: publicProcedure.query(async ({ ctx }) => {
  //   const latestUser = await ctx.db.query.user.findFirst({
  //     orderBy: (users, { desc }) => [desc(users.createdTs)],
  //   });

  //   return latestUser ?? null;
  // }),
});
