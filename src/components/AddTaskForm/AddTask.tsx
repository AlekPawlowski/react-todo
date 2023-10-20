import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAddTaskSchema, addTaskSchema } from "../../validations/formSchema"
import { addTaskFormFields } from "../../formFields/addTaskFields"
import { FormField } from "../FormField/FormField"

/**
 * component with form that will add new task to reducer.
 */
export const AddTask = () => {
    // initlize react hook form
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<IAddTaskSchema>({
        resolver: zodResolver(addTaskSchema)
    })

    /** submit functi 
     * after correct submiting, push element to the reducer
    */
    const onSubmit: SubmitHandler<IAddTaskSchema> = async (formData) => {
        console.log("submit", formData);
    }

    return <form className="add_task_form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Dodaj zadanie</h1>
        {
            addTaskFormFields.map((field) => {
                const { label } = field;
                return <FormField<IAddTaskSchema>
                    key={label}
                    errors={errors}
                    field={field}
                    register={register}
                />
            })
        }
        {/* default type of button is submiting so there is no need to add type */}
        <button className="confirmation_button">Dodaj zadanie</button>
    </form>
}