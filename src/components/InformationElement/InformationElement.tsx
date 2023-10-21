import { TInformationElement } from "../../interface/TInformationElement"
import './InformationElement.style.scss';

/**
 * Component that will handle all information (not errors)
 * like when there is a situation that component
 * that should render something dosen't have any data or loading it.
 * @param {string} message -> message that will be displayed
 */
export const InformationElement = ({children}: TInformationElement) => {
    return <p className="information_text">{children}</p>
}