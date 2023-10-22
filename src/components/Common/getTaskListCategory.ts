import { ITaskElement } from "../../interface/ITaskState";

/**
 * function to get specific category from our list
 * by filtering it based on status
 * @param {ITaskElement} list -> list of tasks
 * @param status -> status of the single task
 */
export const getTaskCategory= (
    list: ITaskElement[], 
    status: ITaskElement['status']
) => list.filter(taks => taks.status === status);