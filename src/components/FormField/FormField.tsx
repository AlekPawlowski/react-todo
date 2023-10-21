/* eslint-disable @typescript-eslint/ban-ts-comment */

import { FieldValues, Path } from "react-hook-form";
import { TFormField } from "../../interface/TFormField";
import './FormField.style.scss';

/**
 * Component that stands for single form field
 * @errors -> neccerery elemet that will show us errors if user made one
 * @field -> single form element that match to the type TTAddTaskFormFields
 * @register -> register actions of the input
 */
export function FormField<T extends FieldValues>({errors, field, register} : TFormField<T>) {
    const {description, label, placeholder} = field;
    return <fieldset className="form_fieldset">
        <label htmlFor={label}>{description}:</label>
        <input 
            id={label} 
            placeholder={placeholder} 
            type="text" 
            {...register(label as Path<T>)}
        />
        <p>
            {/* @ts-ignore: Suppress all errors on the next line */}
            {errors[label] && errors[label]?.message}
        </p>
    </fieldset>
}