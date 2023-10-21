import { useSelector } from "react-redux"
import { RootState } from "../../redux";
import { TaskList } from "../TaskList/TaskList";
import { InformationElement } from "../InformationElement/InformationElement";

/**
 * Main view where there is import for current tasks and
 * then pass to render component TaskList
 * if store is empty show statement
 */
export const TaskContainer = () => {
    const store = useSelector((state: RootState) => state.tasks.tasks);
    
    if(!store) return <InformationElement>There is no tasks right now, please add new one.</InformationElement>

    return <section className="list_container">
        <TaskList list={store}/>
    </section>
}