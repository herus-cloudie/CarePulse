import PhoneInput, { Value } from 'react-phone-number-input'

import { CustomFormFieldProps } from "@/constants/type";

import { Input } from "../ui/input"

import Image from "next/image";

const CustomFormField = ({type , name , label , placeholder , iconSrc , iconAlt} : CustomFormFieldProps) => {
  return (
    <div className="space-y-2 flex-1">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor={name}>{label}</label> 
      <div>
        {iconSrc && iconAlt ? 
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          <Image className="ml-2" src={iconSrc} alt={iconAlt} width={25} height={25}/> 
          <Input className="shad-input border-0" type={type} name={name} placeholder={placeholder}/>
        </div>
        : <PhoneInput            
          defaultCountry="IR"
          placeholder={placeholder}
          international
          withCountryCallingCode
          onChange={(e) => console.log(e)}
          className="input-phone" 
          style={{backgroundColor : 'black'}}/>
        }
      </div>
    </div>
  )
}

export default CustomFormField;