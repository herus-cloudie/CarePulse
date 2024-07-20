'use client'

import React from "react"

import FormLayout from "@/components/module/formLayout"
import RegisterForm from "@/components/form/registerForm"

const Register = () => {
    return <FormLayout imgSrc="/img/Illustration.png" ClassName="sub-container max-w-[860px] flex-1 flex-col py-10" children={<RegisterForm />}/>
}

export default Register;