import { ITaskElement } from "../../interface/ITaskState"

/**
 * component of the single task
 * main functionality beside render element:
 * change task status and move to another list
 * delete task
 */
export const SingleTask = ({ description, id, status, title }: ITaskElement) => {
    const statusClass = status === "done" ? "done" : "todo";
    const changeTaskStatus = () => {
        console.log("complete task btn clicked", id);
    
    }
    const deleteTask = () => {
        console.log("delete task btn clicked", id);
    }

    return <section className={`single_task ${statusClass}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={changeTaskStatus}>Done btn</button>
        <button onClick={deleteTask}>Delete task</button>
    </section>
}