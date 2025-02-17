import { z } from "zod";

export const addTaskSchema = z.object({
    description: z.string().min(3, {message: "Description must have more then 5 letters"}),
    head: z.string().min(5, {message: "Header must have more then 5 letters"})
})
export type IAddTaskSchema = z.infer<typeof addTaskSchema>;