import { Fragment } from "react"
import { ITaskElement } from "../../interface/ITaskState"
import { ITaskList } from "../../interface/ITaskList"
import { TaskListElement } from "../TaskListElement/TaskListElement";
import { Divider } from "../Divider/Divider";
import { getTaskCategory } from "../Common/getTaskListCategory";

/**
 * @param {ITaskList} list 
 * Component to split given list by status of each one
 * and render each category
 */
export const TaskList = ({list}: ITaskList) => {
    const toDoTaskList: ITaskElement[] = getTaskCategory(list, "todo");
    const doneTasksList: ITaskElement[] = getTaskCategory(list, "done");

    return <Fragment>
        <TaskListElement list={toDoTaskList} title="To Do"/>
        <Divider />
        <TaskListElement list={doneTasksList} title="Done"/>
    </Fragment>
} 