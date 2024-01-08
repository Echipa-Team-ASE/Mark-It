import { z } from 'zod';

export const insertTaskSchema = z.object({
  title: z.string().min(3, 'Titlul trebuie să aibă cel puțin 3 caractere.'),
  description: z.string().min(3, 'Descrierea trebuie să aibă cel puțin 3 caractere.'),
  status: z.enum(['open', 'pending', 'completed', 'closed']),
  user: z.string(),
  manager: z.string(),
});

export const updateTaskStatusSchema = z.object({
  status: z.enum(['open', 'pending', 'completed', 'closed']),
});