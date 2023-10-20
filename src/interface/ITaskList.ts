import { ITaskElement } from "./ITaskState";

export interface ITaskList {
    list: ITaskElement[]
}

export interface ITsakListElement extends ITaskList {
    title: string
}