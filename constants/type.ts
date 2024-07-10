import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { HTMLInputTypeAttribute } from "react";

interface CustomFormFieldProps{
    inputType : HTMLInputTypeAttribute,
    name : string,
    label : string,
    placeholder ?: string,
    iconSrc ?: string | StaticImport,
    iconAlt ?: string,
}

export type {CustomFormFieldProps}