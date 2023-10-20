import { useDispatch } from "react-redux";
import { ITaskElement } from "../../interface/ITaskState"
import { deleteTask, updateStatus } from "../../redux/taskSlice";

/**
 * component of the single task
 * main functionality beside render element:
 * change task status and move to another list
 * delete task
 */
export const SingleTask = ({ description, id, status, title }: ITaskElement) => {
    const dispatch = useDispatch();
    const statusClass = status === "done" ? "done" : "todo";
    const statusButtonText = status === "done" ? "Oznacz jako niezrobione" : "Oznacz jako zrobione";

    const changeTaskStatus = () => {
        dispatch(updateStatus({id, status}));
    }
    const deleteTaskAction = () => {
        console.log("delete task btn clicked", id);
        dispatch(deleteTask(id));
    }

    return <section className={`single_task ${statusClass}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={changeTaskStatus}>{statusButtonText}</button>
        <button onClick={deleteTaskAction}>Delete task</button>
    </section>
}