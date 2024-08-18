import {
  boolean,
  index,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./user";
import { generateShortUUID } from "@/utils/generate_short_uuid";
import { relations } from "drizzle-orm";
import { pasabuyRequest } from "./pasabuy_request";

export const trip = pgTable(
  "trip",
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
      .references(() => user.id, { onDelete: "cascade" })
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

export const TripRelations = relations(trip, ({ one, many }) => ({
  owner: one(user, {
    fields: [trip.ownerId],
    references: [user.id],
  }),
  pasabuyRequests: many(pasabuyRequest),
}));
