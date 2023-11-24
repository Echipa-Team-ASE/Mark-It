import { pgTable, text } from "drizzle-orm/pg-core";

export const user = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  email: text('email').notNull(),
  password: text('password'),
  name: text('name'),
  role: text('role').$type<'admin' | 'user' | 'manager'>().default('user'),
  createdAt: text('created_at').default('now()'),
  managerId: text('manager_id'),
});

export type User = typeof user.$inferSelect;
export type CreateCredentialsUserDto = {
  email: string;
  password: string;
  name?: string;
  role?: 'admin' | 'user' | 'manager';
  managerId?: string;
};