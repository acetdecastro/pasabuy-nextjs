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
import { pasabuyRequest } from "./pasabuy_request";

export const item = pgTable("item", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  quantity: integer("quantity").default(0).notNull(),
  description: text("description").default("").notNull(),
  additionalRequest: text("additionalRequest").default("").notNull(),
  maxBudget: integer("maxBudget").default(0).notNull(),
  agreedPrice: integer("maxBudget").default(0).notNull(),

  // Relations
  pasabuyRequestId: integer("pasabuyRequestId").references(
    () => pasabuyRequest.id,
    { onDelete: "cascade" },
  ),

  // Audit
  createdTs: timestamp("createdTs").notNull().defaultNow(),
  updatedTs: timestamp("updatedTs", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const itemRelations = relations(item, ({ one }) => ({
  pasabuyRequest: one(pasabuyRequest, {
    fields: [item.pasabuyRequestId],
    references: [pasabuyRequest.id],
  }),
}));
