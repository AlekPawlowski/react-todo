import { ITsakListElement } from "../../interface/ITaskList";
import { InformationElement } from "../InformationElement/InformationElement";
import { SingleTask } from "../SingleTask/SingleTask";
import './TaskListElement.style.scss';

/**
 * Component that render part of the list
 * main purpose is to render based on status
 * but if there will be need for more specific lists
 * in the future this could be 
 * expanded for new functionality
 */
export const TaskListElement = ({list, title}: ITsakListElement) => {
    if(list.length === 0) return <InformationElement>Currently, there is no {title.toLocaleLowerCase()} task elements</InformationElement>

    return <section className={`list list_${title}`}>
        <h2>{title} List</h2>
        <section className="list_elements_container">
        {
            list.map((item) =>{
                const {id} = item;
                return <SingleTask key={id} {...item} />
            })
        }
        </section>
    </section>
}