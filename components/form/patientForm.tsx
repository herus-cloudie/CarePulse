"use client";

import 'react-phone-number-input/style.css'

import { Button } from "../ui/button";
import CustomFormField from "../module/customFormField";
import { useRouter } from 'next/navigation';

export const PatientForm = () => {
  const router = useRouter();

  const handleSubmit = async () => {
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 space-y-6">


      <CustomFormField
        type={'text'}
        name="name"
        label="Full name"
        placeholder="John Doe"
        iconSrc="/LeadIcon.svg"
        iconAlt="user"
      />

      <CustomFormField
        type={'email'}
        name="email"
        label="Email"
        placeholder="johndoe@gmail.com"
        iconSrc="/LeadIcon-1.svg"
        iconAlt="email"
      />

      <CustomFormField
        type={'text'}
        name="phone"
        label="Phone number"
        placeholder="+98 919 256 8598"
      />

      <Button onClick={() => router.push(`${Math.random()}/register`)} className="bg-green-500 w-full">Get Started</Button>
    </form>
  );
};