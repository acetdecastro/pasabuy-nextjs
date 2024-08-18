import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./user";
import { trip } from "./trip";
import { relations } from "drizzle-orm";
import { item } from "./item";

export const PasabuyRequestStatusEnum = pgEnum("pasabuyRequestStatus", [
  "pending",
  "approved",
  "in_progress",
  "to_ship",
  "completed",
  "canceled",
]);

export const pasabuyRequest = pgTable("pasabuyRequest", {
  id: serial("id").primaryKey(),
  status: PasabuyRequestStatusEnum("status").notNull().default("pending"),

  // Relations
  tripId: integer("tripId").references(() => trip.id, { onDelete: "cascade" }),
  requestorId: varchar("requestorId").references(() => user.id, {
    onDelete: "cascade",
  }),
  handlerId: varchar("handlerId").references(() => user.id, {
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
  pasabuyRequest,
  ({ one, many }) => ({
    trip: one(trip, {
      fields: [pasabuyRequest.tripId],
      references: [trip.id],
    }),
    requestor: one(user, {
      fields: [pasabuyRequest.requestorId],
      references: [user.id],
      relationName: "requestor",
    }),
    reviewer: one(user, {
      fields: [pasabuyRequest.handlerId],
      references: [user.id],
      relationName: "handler",
    }),
    items: many(item),
  }),
);
