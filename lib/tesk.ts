import db from "@/db";
import { CreateTaskDto, task } from "@/db/schema/task";
import crypto from "crypto";

export async function createTask(taskData: CreateTaskDto) {
    taskData.createdAt = new Date().toISOString();

    const newTask = await db
        .insert(task)
        .values({ id: crypto.randomUUID(), ...taskData })
        .returning({ id: task.id });
    
    return newTask;
}