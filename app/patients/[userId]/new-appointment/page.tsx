import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            // if patient is null or undefined, the code doesn't throw an error. Instead, it will pass undefined as the value.
            // $id--often used in databases to identify records.
            patientId={patient?.$id}
            // userId is likely a string or number that uniquely identifies the user in the system. It might be the ID of the user who is logged in or the one for whom the appointment is being created.
            userId={userId}
            // type="create" indicates that the form should be used to create a new appointment. The AppointmentForm component may use this prop to determine its behavior, such as showing a "Create Appointment" button instead of an "Edit Appointment" button or configuring the form fields for new entries rather than editing existing data.
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;
