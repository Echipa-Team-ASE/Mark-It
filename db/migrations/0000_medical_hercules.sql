CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text,
	"password" text,
	"name" text,
	"role" text DEFAULT 'user',
	"created_at" text DEFAULT 'now()',
	"manager_id" text
);
