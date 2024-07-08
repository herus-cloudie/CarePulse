import Image from "next/image"
import {PatientForm} from "../form/patientForm"

const SignInPage = () => {
  return (
    <div className="flex justify-between h-screen max-h-screen">
        <section className="remove-scrollbar container">
            <div className="sub-container max-w-[496px]">
                <Image src='/logo.svg' width={161} height={32} alt="logo icon"/>
                <div className="max-w-[496px]">
                    <PatientForm />
                </div>
                <div className="flex justify-between items-center relative pb-0">
                    <small className="text-sm text-dark-600">© 2024 CarePulse</small>
                    <small className="text-sm text-green-500 cursor-pointer">Admin</small>
                </div>
            </div>
        </section>
        <Image
        src="/Illustration-1.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[30%]"
      />
    </div>

  )
}

export default SignInPage   