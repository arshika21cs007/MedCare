// The dialog opens when the button is clicked and closes when the user interacts with it (e.g., clicking outside the dialog or submitting the form).
// The AppointmentForm handles the input and submission of appointment details. After the form is submitted, the dialog will close using the setOpen function.

"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Appointment } from "@/types/appwrite.types";

import { AppointmentForm } from "./forms/AppointmentForm";

import "react-datepicker/dist/react-datepicker.css";

export const AppointmentModal = ({
  patientId,
  userId,
  appointment,
  type,
}: {
  patientId: string;
  userId: string;
  appointment?: Appointment;
  type: "schedule" | "cancel";
  title: string;
  description: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    // open: A boolean state that determines whether the dialog is open or closed.
    // onOpenChange: A function to update the open state when the dialog is opened or closed.
    <Dialog open={open} onOpenChange={setOpen}>
      {/* The component that triggers the dialog to open. */}
      <DialogTrigger asChild>
        <Button
          //ghost--less prominent.
          variant="ghost"
          className={`capitalize ${type === "schedule" && "text-green-500"}`}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          {/* DialogTitle: The title of the dialog, which is capitalized and based on the type prop (e.g., "Schedule Appointment) */}
          <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
          <DialogDescription>
            Please fill in the following details to {type} appointment
          </DialogDescription>
        </DialogHeader>

        <AppointmentForm
          userId={userId}
          patientId={patientId}
          type={type}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};
