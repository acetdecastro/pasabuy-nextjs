DO $$ BEGIN
 CREATE TYPE "public"."pasabuyRequestStatus" AS ENUM('pending', 'approved', 'in_progress', 'to_ship', 'completed', 'canceled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"emailVerified" boolean DEFAULT false NOT NULL,
	"firstName" varchar(256) NOT NULL,
	"lastName" varchar(256) NOT NULL,
	"profilePictureUrl" varchar(256) DEFAULT '',
	"username" varchar(30),
	"createdTs" timestamp DEFAULT now() NOT NULL,
	"updatedTs" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trips" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar NOT NULL,
	"title" varchar(256) NOT NULL,
	"requestGuideline" text NOT NULL,
	"destination" varchar(256) NOT NULL,
	"willBeShippingFrom" varchar(256),
	"link" varchar(256) NOT NULL,
	"isPrivate" boolean DEFAULT true NOT NULL,
	"isDisabled" boolean DEFAULT false NOT NULL,
	"ownerId" varchar NOT NULL,
	"createdTs" timestamp DEFAULT now() NOT NULL,
	"updatedTs" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "trips_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pasabuyRequests" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" "pasabuyRequestStatus" DEFAULT 'pending' NOT NULL,
	"tripId" integer,
	"requestorId" varchar,
	"handlerId" varchar,
	"createdTs" timestamp DEFAULT now() NOT NULL,
	"updatedTs" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "items" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"quantity" integer DEFAULT 0 NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"additionalRequest" text DEFAULT '' NOT NULL,
	"maxBudget" integer DEFAULT 0 NOT NULL,
	"pasabuyRequestId" integer,
	"createdTs" timestamp DEFAULT now() NOT NULL,
	"updatedTs" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips" ADD CONSTRAINT "trips_ownerId_users_id_fk" FOREIGN KEY ("ownerId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pasabuyRequests" ADD CONSTRAINT "pasabuyRequests_tripId_trips_id_fk" FOREIGN KEY ("tripId") REFERENCES "public"."trips"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pasabuyRequests" ADD CONSTRAINT "pasabuyRequests_requestorId_users_id_fk" FOREIGN KEY ("requestorId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pasabuyRequests" ADD CONSTRAINT "pasabuyRequests_handlerId_users_id_fk" FOREIGN KEY ("handlerId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "items" ADD CONSTRAINT "items_pasabuyRequestId_pasabuyRequests_id_fk" FOREIGN KEY ("pasabuyRequestId") REFERENCES "public"."pasabuyRequests"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "usernameIdx" ON "users" ("username");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "keyIdx" ON "trips" ("key");