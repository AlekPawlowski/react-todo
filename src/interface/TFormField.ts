import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
import { TAddTaskFormFields } from "./TAddTaskFormFields";

/**
 * genereic type that stands for single form field
 * where T should stands for schema of the form
 * @errors -> neccerery elemet that will show us errors if user made one
 * @field -> single form element that match to the type TTAddTaskFormFields
 * @register -> register actions of the input
 */
export type TFormField<T extends FieldValues> = {
    errors: FieldErrors<T>;
    field: TAddTaskFormFields;
    register: UseFormRegister<T>;
}