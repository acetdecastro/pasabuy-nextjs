import { relations } from "drizzle-orm";
import { boolean, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { trip } from "./trip";
import { pasabuyRequest } from "./pasabuy_request";
import { index } from "drizzle-orm/pg-core";

export const user = pgTable(
  "user",
  {
    id: varchar("id", { length: 256 }).primaryKey(),
    email: varchar("email", { length: 256 }).notNull(),
    emailVerified: boolean("emailVerified").notNull().default(false),
    firstName: varchar("firstName", { length: 256 }).notNull(),
    lastName: varchar("lastName", { length: 256 }).notNull(),
    profilePictureUrl: varchar("profilePictureUrl", { length: 256 }).default(
      "",
    ),
    username: varchar("username", { length: 30 }).notNull(),

    // Audit
    createdTs: timestamp("createdTs").notNull().defaultNow(),
    updatedTs: timestamp("updatedTs", { mode: "date" })
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => new Date()),
  },
  (u) => ({
    usernameIdx: index("usernameIdx").on(u.username),
  }),
);

export const usersRelations = relations(user, ({ many }) => ({
  trips: many(trip),
  requestor: many(pasabuyRequest, { relationName: "requestor" }),
  handler: many(pasabuyRequest, { relationName: "handler" }),
}));
