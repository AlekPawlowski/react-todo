export interface ITaskElement {
    description: string,
    status: "done" | "todo",
    title: string,
}

export interface ITaskState {
    tasks: ITaskElement[] | null;
}
