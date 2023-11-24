import { z } from "zod";

export const insertUserSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string(),
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    role: z.enum(["admin", "user", "manager"]),
    createdAt: z.string(),
    managerId: z.string().optional(),
});