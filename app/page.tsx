import {PatientForm} from "@/components/form/patientForm"
import FormLayout from "@/components/module/formLayout"

const Home = () => {
  return <FormLayout imgSrc="/Illustration-1.png" ClassName="sub-container max-w-[496px]" children={<PatientForm />}/>
}

export default Home;