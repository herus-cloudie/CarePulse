import CustomFormField from "../module/customFormField";
import { Button } from "../ui/button";

const RegisterForm = () => {
  return (
  <>
    <h2 className="text-3xl mb-10 mt-5 border-b pb-2 border-dark-600">Personal</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      <CustomFormField
      inputType={'date'}
      name="Date Of Birth"
      label="Birth Day"
      placeholder=""
      iconSrc="/LeadIcon.svg"
      iconAlt="user"
      />

      <CustomFormField
      inputType={'radio'}
      name="gender"
      label="Gender"
      placeholder="johndoe@gmail.com"
      iconSrc="/LeadIcon.svg"
      iconAlt="email"
      />

      <CustomFormField
      inputType={'text'}
      name="address"
      label="Address"
      placeholder="Tehran, Satarkhan Street"
      />

      <CustomFormField
      inputType={'text'}
      name="occupation"
      label="Occupation"
      placeholder="Mechanic"
      />

      <CustomFormField
      inputType={'text'}
      name="emergencyContactName"
      label="Emergency contact name"
      placeholder="hamed mohammadi"
      />

      <CustomFormField
      inputType={'phone'}
      name="EmergencyContactNumber"
      label="Emergency contact number"
      placeholder=""
      />

    </div>  

    <h2 className="text-3xl mb-10 mt-16 border-b pb-2 border-dark-600">Medical Information</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <CustomFormField
      inputType={'text'}
      name="Insurance provider"
      label="Insurance provider"
      placeholder="BlueCross BlueShield"
      />
      <CustomFormField
      inputType={'text'}
      name="InsurancePolicyNumber"
      label="Insurance policy number"
      placeholder=""
      />
    </div>

    <Button className="bg-green-500 w-full mt-10">LET'S GO!</Button>
  </>
  )
}

export default RegisterForm;