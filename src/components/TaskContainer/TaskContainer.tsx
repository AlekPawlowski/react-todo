import { useSelector } from "react-redux"
import { RootState } from "../../redux";
import { TaskList } from "../TaskList/TaskList";

/**
 * Main view where there is import for current tasks and
 * then pass to render component TaskList
 * if store is empty show statement
 */
export const TaskContainer = () => {
    const store = useSelector((state: RootState) => state.tasks.tasks);
    
    if(!store) return <p>There is no tasks right now, pleasy add new one.</p>

    return <section className="list_container">
        <TaskList list={store}/>
    </section>
}