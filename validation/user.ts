import { z } from "zod";

export const insertUserSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
  password: z.string(),
  role: z.enum(['admin', 'user', 'manager']),
  managerId: z.string().optional(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Te rugăm să introduci o adresă validă de email.")
    .email("Emailul introdus nu este o adresă validă."),
  password: z.string().min(1, "Te rugăm să îți introduci parola."),
});