import { Fragment } from "react"
import { ITaskElement } from "../../interface/ITaskState"
import { ITaskList } from "../../interface/ITaskList"
import { TaskListElement } from "../TaskListElement/TaskListElement";

export const TaskList = ({list}: ITaskList) => {
    const toDoTaskList: ITaskElement[] = list.filter(taks => taks.status === "todo");
    const doneTasksList: ITaskElement[] = list.filter(taks => taks.status === "done");
    return <Fragment>
        <TaskListElement list={toDoTaskList} title="To Do"/>
        <TaskListElement list={doneTasksList} title="Done"/>
    </Fragment>
} 