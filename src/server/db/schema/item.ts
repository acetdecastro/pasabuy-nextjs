import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { pasabuyRequests } from "./pasabuy_request";

export const items = pgTable("items", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  quantity: integer("quantity").default(0).notNull(),
  description: text("description").default("").notNull(),
  additionalRequest: text("additionalRequest").default("").notNull(),
  maxBudget: integer("maxBudget").default(0).notNull(),
  agreedPrice: integer("maxBudget").default(0).notNull(),

  // Relations
  pasabuyRequestId: integer("pasabuyRequestId").references(
    () => pasabuyRequests.id,
    { onDelete: "cascade" },
  ),

  // Audit
  createdTs: timestamp("createdTs").notNull().defaultNow(),
  updatedTs: timestamp("updatedTs", { mode: "date" })
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const itemRelations = relations(items, ({ one }) => ({
  pasabuyRequest: one(pasabuyRequests, {
    fields: [items.pasabuyRequestId],
    references: [pasabuyRequests.id],
  }),
}));
