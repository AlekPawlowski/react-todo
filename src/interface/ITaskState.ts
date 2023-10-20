/**
 * single task interface
 */
export interface ITaskElement {
    description: string,
    id: string,
    status: "done" | "todo",
    title: string,
}

/** interface for tasks slice */
export interface ITaskState {
    tasks: ITaskElement[] | null;
}

/**
 * redux update payload action interface
 */
export interface IUpdatePayloadAction {
    id: string;
    status: ITaskElement['status']
}
