export type TAddTaskFormFields = {
    description: string,
    label: string,
    placeholder: string,
}

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