import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAddTaskSchema, addTaskSchema } from "../../validations/formSchema"
import { addTaskFormFields } from "../../formFields/addTaskFields"
import { FormField } from "../FormField/FormField"
import { ITaskElement } from "../../interface/ITaskState"
import { useDispatch } from "react-redux"
import { addTask } from "../../redux/taskSlice"
import { v4 as uuidv4 } from 'uuid';

/**
 * component with form that will add new task to reducer.
 */
export const AddTaskForm = () => {
    const dispatch = useDispatch();
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
        const {description, head} = formData;
        const newTask: ITaskElement = {
            description: description,
            id: uuidv4(),
            status: "todo",
            title: head,
        }
        dispatch(addTask(newTask))
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