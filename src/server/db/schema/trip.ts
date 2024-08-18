import {
  boolean,
  index,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./user";
import { generateShortUUID } from "@/utils/generate_short_uuid";
import { relations } from "drizzle-orm";
import { pasabuyRequests } from "./pasabuy_request";

export const trips = pgTable(
  "trips",
  {
    id: serial("id").primaryKey(),
    key: varchar("key")
      .$defaultFn(() => generateShortUUID())
      .unique()
      .notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    requestGuideline: text("requestGuideline").notNull(),
    destination: varchar("destination", { length: 256 }).notNull(),
    willBeShippingFrom: varchar("willBeShippingFrom", {
      length: 256,
    }),
    link: varchar("link", { length: 256 }).notNull(),

    // Config
    isPrivate: boolean("isPrivate").default(true).notNull(),
    isDisabled: boolean("isDisabled").default(false).notNull(),

    // Relations
    // One to One
    ownerId: varchar("ownerId")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),

    // Audit
    createdTs: timestamp("createdTs").notNull().defaultNow(),
    updatedTs: timestamp("updatedTs", { mode: "date" })
      .notNull()
      .defaultNow()
      .$onUpdateFn(() => new Date()),
  },
  (t) => ({
    keyIdx: index("keyIdx").on(t.key),
  }),
);

export const TripRelations = relations(trips, ({ one, many }) => ({
  owner: one(users, {
    fields: [trips.ownerId],
    references: [users.id],
  }),
  pasabuyRequests: many(pasabuyRequests),
}));
