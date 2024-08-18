DO $$ BEGIN
 CREATE TYPE "public"."pasabuyRequestStatus" AS ENUM('pending', 'approved', 'canceled', 'completed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"emailVerified" boolean DEFAULT false NOT NULL,
	"firstName" varchar(256) NOT NULL,
	"lastName" varchar(256) NOT NULL,
	"profilePictureUrl" varchar(256) DEFAULT '',
	"username" varchar(30) NOT NULL,
	"createdTs" timestamp DEFAULT now() NOT NULL,
	"updatedTs" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trip" (
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
	CONSTRAINT "trip_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pasabuyRequest" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" "pasabuyRequestStatus" DEFAULT 'pending' NOT NULL,
	"tripId" integer,
	"requestorId" varchar,
	"handlerId" varchar,
	"createdTs" timestamp DEFAULT now() NOT NULL,
	"updatedTs" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trip" ADD CONSTRAINT "trip_ownerId_user_id_fk" FOREIGN KEY ("ownerId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pasabuyRequest" ADD CONSTRAINT "pasabuyRequest_tripId_trip_id_fk" FOREIGN KEY ("tripId") REFERENCES "public"."trip"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pasabuyRequest" ADD CONSTRAINT "pasabuyRequest_requestorId_user_id_fk" FOREIGN KEY ("requestorId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pasabuyRequest" ADD CONSTRAINT "pasabuyRequest_handlerId_user_id_fk" FOREIGN KEY ("handlerId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "keyIdx" ON "trip" ("key");