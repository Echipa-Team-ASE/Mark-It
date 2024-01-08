import db from "@/db";
import { CreateTaskDto, task } from "@/db/schema/task";
import { eq } from 'drizzle-orm';
import crypto from "crypto";

export async function createTask(taskData: CreateTaskDto) {
    taskData.createdAt = new Date().toISOString();

    const newTask = await db
        .insert(task)
        .values({ id: crypto.randomUUID(), ...taskData })
        .returning({ id: task.id });
    
    return newTask;
}

export async function getAllTasks() {
    const queryResult = await db
        .select()
        .from(task);

    return queryResult;
}

export async function getTasksByUserId(id: string) {
    const queryResult = await db
        .select()
        .from(task)
        .where(eq(task.userId, id));

    return queryResult;
}

export async function updateTaskStatus(id: string, status: 'open' | 'pending' | 'completed' | 'closed') {
    const queryResult = await db
        .update(task)
        .set({ status })
        .where(eq(task.id, id));

    return queryResult;
}