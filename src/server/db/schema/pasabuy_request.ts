import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./user";
import { trips } from "./trip";
import { relations } from "drizzle-orm";
import { items } from "./item";

export const PasabuyRequestStatusEnum = pgEnum("pasabuyRequestStatus", [
  "pending",
  "approved",
  "in_progress",
  "to_ship",
  "completed",
  "canceled",
]);

export const pasabuyRequests = pgTable("pasabuyRequests", {
  id: serial("id").primaryKey(),
  status: PasabuyRequestStatusEnum("status").notNull().default("pending"),

  // Relations
  tripId: integer("tripId").references(() => trips.id, { onDelete: "cascade" }),
  requestorId: varchar("requestorId").references(() => users.id, {
    onDelete: "cascade",
  }),
  handlerId: varchar("handlerId").references(() => users.id, {
    onDelete: "cascade",
  }),

  // Audit
  createdTs: timestamp("createdTs").notNull().defaultNow(),
  updatedTs: timestamp("updatedTs", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const pasabuyRequestRelations = relations(
  pasabuyRequests,
  ({ one, many }) => ({
    trip: one(trips, {
      fields: [pasabuyRequests.tripId],
      references: [trips.id],
    }),
    requestor: one(users, {
      fields: [pasabuyRequests.requestorId],
      references: [users.id],
      relationName: "requestor",
    }),
    reviewer: one(users, {
      fields: [pasabuyRequests.handlerId],
      references: [users.id],
      relationName: "handler",
    }),
    items: many(items),
  }),
);
