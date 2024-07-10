'use client'
import "react-datepicker/dist/react-datepicker.css";

import PhoneInput from 'react-phone-number-input'
import DatePicker from "react-datepicker";

import Image from "next/image";
import { useState } from "react";

import { CustomFormFieldProps } from "@/constants/type";
import { GenderOptions } from '@/constants';

import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea";


const CustomFormField = ({inputType , name , label , placeholder , iconSrc , iconAlt} : CustomFormFieldProps) => {

  const [state , setState] = useState({
    birthDate: new Date(Date.now()),
    gender: 'Male',
    address: "",
    occupation: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    primaryPhysician: "",
    insuranceProvider: "",
    insurancePolicyNumber: "",
    allergies: "",
    currentMedication: "",
    familyMedicalHistory: "",
    pastMedicalHistory: "",
    identificationType: "Birth Certificate",
    identificationNumber: "",
    identificationDocument: [],
    treatmentConsent: false,
    disclosureConsent: false,
    privacyConsent: false,
  });

  const PersonalInfo = () => {
    switch (inputType) {
      case 'phone':
        return (
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
          return (
            <RadioGroup className="flex h-11 gap-6 xl:justify-between">
              {GenderOptions.map(gender => (
                <div className="radio-group" key={gender}>
                  <RadioGroupItem value={gender}/>
                  <Label>{gender}</Label>
                </div>
                ))}
            </RadioGroup>
        );

        case 'date':
          return (
            <div className="flex rounded-md border border-dark-500 bg-dark-400">
              <Image src={'/calendar.svg'} alt='calender' width={24} height={24} className='mx-2'/>
              <DatePicker dateFormat={'MM/dd/yyyy'} wrapperClassName="date-picker" selected={state.birthDate} onChange={(date) => setState({...state , birthDate : (date as Date)})}/>
            </div>
        );

        case 'textArea':
          return (
            <div className="flex rounded-md border border-dark-500 bg-dark-400">
              <Textarea onChange={(e) => setState({...state , gender : e.target.value})} className="shad-textArea border-0" name={name} placeholder={placeholder}/>  
            </div>
        );

      default: 
        return (
          <div className="flex rounded-md border border-dark-500 bg-dark-400">
            {iconSrc && iconAlt && <Image className="ml-2" src={iconSrc} alt={iconAlt} width={25} height={25}/> }
            <Input onChange={(e) => setState({...state , gender : e.target.value})} className="shad-input border-0" type={inputType} name={name} placeholder={placeholder}/>
          </div>
        );
    }
  }

  return (
    <div className="space-y-2 flex-1">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor={name}>{label}</label> 
      <PersonalInfo />
    </div>
  )
}

export default CustomFormField;