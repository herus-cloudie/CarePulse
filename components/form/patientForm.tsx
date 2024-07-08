"use client";

import 'react-phone-number-input/style.css'

import { Button } from "../ui/button";
import CustomFormField from "../module/customFormField";

export const PatientForm = () => {

  const handleSubmit = async () => {
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 space-y-6">
      <section className="mb-12 space-y-4">
        <h1 className="header">Hi there 👋</h1>
        <p className="text-dark-700">Get started with appointments.</p>
      </section>

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

      <Button className="bg-green-500 w-full">Get Started</Button>
    </form>
  );
};