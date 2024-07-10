import PhoneInput from 'react-phone-number-input'

import { CustomFormFieldProps } from "@/constants/type";

import { Input } from "../ui/input"

import Image from "next/image";
import { GenderOptions } from '@/constants';

const CustomFormField = ({inputType , name , label , placeholder , iconSrc , iconAlt} : CustomFormFieldProps) => {

  const DynamicInput = () => {
    switch (inputType) {
      case 'phone':
        return(
          <PhoneInput            
          defaultCountry="IR"
          placeholder={placeholder}
          international
          withCountryCallingCode
          onChange={(e) => console.log(e)}
          className="input-phone" 
          style={{backgroundColor : 'black'}}/>
        );

      case 'radio':
          return <div className="flex justify-between">
            {GenderOptions.map(gender => (<Input className=" rounded-md border border-dark-500 bg-dark-400" type={inputType} name={name}/>))}
          </div>
        ;

      default: 
        return (
          <div className="flex rounded-md border border-dark-500 bg-dark-400">
            <Image className="ml-2" src={iconSrc as string} alt={iconAlt as string} width={25} height={25}/> 
            <Input className="shad-input border-0" type={inputType} name={name} placeholder={placeholder}/>
          </div>
        );
    }
  }

  return (
    <div className="space-y-2 flex-1">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor={name}>{label}</label> 
      <div>
        <DynamicInput />
      </div>
    </div>
  )
}

export default CustomFormField;