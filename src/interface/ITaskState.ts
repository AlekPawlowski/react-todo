export interface ITaskElement {
    description: string,
    id: string,
    status: "done" | "todo",
    title: string,
}

export interface ITaskState {
    tasks: ITaskElement[] | null;
}
