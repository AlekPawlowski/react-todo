import { TAddTaskFormFields } from "../interface/TAddTaskFormFields";

/**
 * form fields, if we want to add or remove 
 * some fields, we can do it here
 * but remember to change type too
 * and check if it will satisfay the schema
 */
export const addTaskFormFields: TAddTaskFormFields[] = [
    {
        description: "Tytuł zadania",
        label: "head",
        placeholder: "Podaj nazwę zadania"
    },
    {
        description: "Opis zadania",
        label: "description",
        placeholder: "Podaj opis zadania"
    }
]