import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { TAddTaskFormFields } from "../../formFields/addTaskFields"

type TFormField<T extends FieldValues> = {
    errors: FieldErrors<T>;
    field: TAddTaskFormFields;
    register: UseFormRegister<T>;
}
export function FormField<T extends FieldValues>({errors, field, register} : TFormField<T>) {
    const {description, label, placeholder} = field;
    console.log(errors);
    
    return <fieldset >
        <label htmlFor={label}>{description}</label>
        <input 
            id={label} 
            placeholder={placeholder} 
            type="text" 
            {...register(label as Path<T>)}
        />
        {/* @ts-ignore: Suppress all errors on the next line */}
        {errors[label] && errors[label]?.message}
    </fieldset>
}