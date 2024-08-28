import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = async ({
  // params: Contains URL parameters, such as userId.
  // searchParams: Contains query parameters from the URL, such as appointmentId.
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  // The component extracts the appointmentId from the searchParams or defaults to an empty string if it's not provided.
  const appointmentId = (searchParams?.appointmentId as string) || "";
  // It then calls the getAppointment function, passing in the appointmentId, to retrieve details about the specific appointment.
  const appointment = await getAppointment(appointmentId);
  const doctor = Doctors.find(
    // The code finds the specific doctor associated with the appointment by matching the doctor's name from the Doctors list to the primaryPhysician field in the appointment data.
    (doc) => doc.name === appointment.primaryPhysician
  );
  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
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
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">Appointment Request</span> has
            Successfully Submitted!
          </h2>
          <p>We will be in touch shortly to confirm</p>
        </section>
        <section className="request-details">
          <p>Requested appointment details:</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr.{doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
        <p className="copyright"> © 2024 VitalCare</p>
      </div>
    </div>
  );
};

export default Success;
