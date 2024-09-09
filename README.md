# Vital Care - Patient Management System

 <p align="center">
   <img src="VitalCare.jpg" width="350" height="250" >
 </p>

**Streamline patient registration, appointment scheduling, and medical records.**  
Built with `Next.js`, `TypeScript`, `Twilio`, and `TailwindCSS`.

## Overview

The Vital Care platform is a healthcare solution that simplifies patient management through intuitive patient registration, appointment scheduling, and medical record keeping. It also integrates Twilio SMS notifications to enhance communication between the platform and its users.

## Features

- **Patient Registration:** Secure patient registration with data stored in the Patient collection.
- **Appointment Scheduling:** Users can book new appointments and receive appointment confirmation on the success page.
- **Admin Dashboard:** Admins can view all patient records, appointment statuses, and modify appointment details (schedule or cancel).
- **Notifications:** Patients receive email notifications when an appointment is scheduled or canceled.

## Technologies Used

- **Next.js:** Framework for server-rendered React applications.
- **TypeScript:** Static type-checking for building reliable code.
- **TailwindCSS:** Utility-first CSS framework for building responsive user interfaces.
- **Twilio:** Cloud communication platform for sending SMS notifications.

## Usage

### 1. User Flow

- **Login:** Users authenticate using a secure login form, and their details are verified and stored.
- **Register:** Users register by entering personal details, which are stored in the Patient collection.
- **New Appointment:** Users can schedule appointments, and the appointment details are stored in the system.
- **Appointment Success:** Users are redirected to a success page after successfully booking an appointment.

### 2. Admin Flow

- **Admin Access:** Admins can access the admin panel using a password key.
- **View Records:** Admins can view all patient and appointment details, including appointment status and dates.
- **Modify Appointments:** Admins can cancel or schedule appointments as needed.
- **Email Notifications:** Patients are notified via email if their appointment status is changed (scheduled or canceled).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/vital-care.git
    ```

2. Navigate to the project directory:

    ```bash
    cd vital-care
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## Environment Variables

Create a `.env` file in the root of your project and add the following:

```bash
NEXT_PUBLIC_TWILIO_ACCOUNT_SID=your-twilio-account-sid
NEXT_PUBLIC_TWILIO_AUTH_TOKEN=your-twilio-auth-token
NEXT_PUBLIC_TWILIO_PHONE_NUMBER=your-twilio-phone-number
