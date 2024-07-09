'use client'

import React from "react"
import FormLayout from "@/components/template/formLayout"
import RegisterForm from "@/components/form/registerForm"

const Register = () => {
    return <FormLayout imgSrc="/Illustration.png" ClassName="sub-container max-w-[860px] flex-1 flex-col py-10" children={<RegisterForm />}/>
}

export default Register