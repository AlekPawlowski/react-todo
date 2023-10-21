import { Fragment } from "react"
import { ITaskElement } from "../../interface/ITaskState"
import { ITaskList } from "../../interface/ITaskList"
import { TaskListElement } from "../TaskListElement/TaskListElement";
import { Divider } from "../Divider/Divider";

export const TaskList = ({list}: ITaskList) => {
    const toDoTaskList: ITaskElement[] = list.filter(taks => taks.status === "todo");
    const doneTasksList: ITaskElement[] = list.filter(taks => taks.status === "done");
    return <Fragment>
        <TaskListElement list={toDoTaskList} title="To Do"/>
        <Divider />
        <TaskListElement list={doneTasksList} title="Done"/>
    </Fragment>
} 