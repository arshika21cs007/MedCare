import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  try {
    // Fetches user data using the userId from the params.
    const user = await getUser(userId);
    // Fetches patient data using the same userId.
    const patient = await getPatient(userId);

    console.log(patient); // Debugging line

    // Checks if a patient record exists. If so, it redirects the user to a new appointment page using the redirect function. This is used to prevent users from registering if they are already registered as patients.
    if (patient) {
      redirect(`/patients/${userId}/new-appointment`);
    }

    return (
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <div className="flex items-center space-x-4 my-8">
              <Image
                src="/assets/icons/logo.png"
                height={2000}
                width={2000}
                alt="VitalCare"
                className="h-10 w-fit"
              />
              <h1 className="text-2xl">VitalCare</h1>
            </div>

            <RegisterForm user={user} />

            <p className="copyright py-12">© 2024 CarePluse</p>
          </div>
        </section>

        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="side-img max-w-[390px]"
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // Optionally, handle the error with a fallback UI or redirect
  }
};

export default Register;
