import { pgTable, text } from "drizzle-orm/pg-core";

export const task = pgTable("task", {
  id: text("id").notNull().primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status")
    .$type<"open" | "pending" | "completed" | "closed">()
    .default("open"),
  createdAt: text("created_at").default("now()"),
  userId: text("user_id").notNull(),
  managerId: text("manager_id").notNull(),
});

export type Task = typeof task.$inferSelect;
export type CreateTaskDto = {
  title: string;
  description?: string;
  status?: "open" | "pending" | "completed" | "closed";
  createdAt?: string;
  userId: string;
  managerId: string;
};
