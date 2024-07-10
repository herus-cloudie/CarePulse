import CustomFormField from "../module/customFormField";
import { Button } from "../ui/button";

const RegisterForm = () => {
  return (
    <div className="flex-1 space-y-11">

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
        name="phone"
        label="Phone number"
        placeholder="+98 919 256 8598"
      />

      <Button className="bg-green-500 w-full">let's go</Button>
    </div>
  )
}

export default RegisterForm;