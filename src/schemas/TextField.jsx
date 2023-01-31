import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({label, ...props}) => {
    const [field,meta] = useField(props);
    
    return (
        <div className="mainFormData">
            <div className="label">
                <label htmlFor={field.name} className="labelName">{label}</label>
            </div>
            <div className="inputField">
                <input id="inputID" className={`${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} autoComplete="off" />
           <ErrorMessage component="div" name={field.name} className="error" />
            </div>
            
        </div>
    )
}