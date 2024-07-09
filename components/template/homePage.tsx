import {PatientForm} from "../form/patientForm"
import FormLayout from "./formLayout"

const HomePage = () => {
  return <FormLayout imgSrc="/Illustration-1.png" ClassName="sub-container max-w-[496px]" children={<PatientForm />}/>
}

export default HomePage;