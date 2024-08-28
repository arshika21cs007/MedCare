// The zod library is imported to define and validate the form schema
import {z} from "zod";

export const UserFormValidation= z.object({
    name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50,"Name must be at most 50 characters"),
    // Ensures the email field is a string. If not, it will return the error message "Invalid email address".
   email:z.string().email("Invalid email address"),
// Ensures the phone field is a string.
// /^\+?[1-9]\d{1,14}$/.test(phone)-- This is a regular expression used to validate the phone number format.
//^\+?[1-9]\d{1,14}$:
// ^\+?: The phone number may start with an optional +.
// [1-9]: The first digit must be a number between 1 and 9.
// \d{1,14}: The remaining digits can be between 1 to 14 digits long.
   phone:z.string().refine((phone)=>/^\+?[1-9]\d{1,14}$/.test(phone),'Invalid phone number')

   })
   export const PatientFormValidation = z.object({
      name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
      email: z.string().email("Invalid email address"),
      phone: z
        .string()
        .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
      birthDate: z.coerce.date(),
      gender: z.enum(["male", "female", "other"]),
      address: z
        .string()
        .min(5, "Address must be at least 5 characters")
        .max(500, "Address must be at most 500 characters"),
      occupation: z
        .string()
        .min(2, "Occupation must be at least 2 characters")
        .max(500, "Occupation must be at most 500 characters"),
      emergencyContactName: z
        .string()
        .min(2, "Contact name must be at least 2 characters")
        .max(50, "Contact name must be at most 50 characters"),
      emergencyContactNumber: z
        .string()
        .refine(
          (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
          "Invalid phone number"
        ),
      primaryPhysician: z.string().min(2, "Select at least one doctor"),
      insuranceProvider: z
        .string()
        .min(2, "Insurance name must be at least 2 characters")
        .max(50, "Insurance name must be at most 50 characters"),
      insurancePolicyNumber: z
        .string()
        .min(2, "Policy number must be at least 2 characters")
        .max(50, "Policy number must be at most 50 characters"),
      allergies: z.string().optional(),
      currentMedication: z.string().optional(),
      familyMedicalHistory: z.string().optional(),
      pastMedicalHistory: z.string().optional(),
      identificationType: z.string().optional(),
      identificationNumber: z.string().optional(),
      identificationDocument: z.custom<File[]>().optional(),
      treatmentConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
          message: "You must consent to treatment in order to proceed",
        }),
      disclosureConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
          message: "You must consent to disclosure in order to proceed",
        }),
      privacyConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
          message: "You must consent to privacy in order to proceed",
        }),
    });
    
    export const CreateAppointmentSchema = z.object({
      primaryPhysician: z.string().min(2, "Select at least one doctor"),
      schedule: z.coerce.date(),
      reason: z
        .string()
        .min(2, "Reason must be at least 2 characters")
        .max(500, "Reason must be at most 500 characters"),
      note: z.string().optional(),
      cancellationReason: z.string().optional(),
    });
    
    export const ScheduleAppointmentSchema = z.object({
      primaryPhysician: z.string().min(2, "Select at least one doctor"),
      schedule: z.coerce.date(),
      reason: z.string().optional(),
      note: z.string().optional(),
      cancellationReason: z.string().optional(),
    });
    
    export const CancelAppointmentSchema = z.object({
      primaryPhysician: z.string().min(2, "Select at least one doctor"),
      schedule: z.coerce.date(),
      reason: z.string().optional(),
      note: z.string().optional(),
      cancellationReason: z
        .string()
        .min(2, "Reason must be at least 2 characters")
        .max(500, "Reason must be at most 500 characters"),
    });
    
    export function getAppointmentSchema(type: string) {
      switch (type) {
        case "create":
          return CreateAppointmentSchema;
        case "cancel":
          return CancelAppointmentSchema;
        default:
          return ScheduleAppointmentSchema;
      }
    }
   
