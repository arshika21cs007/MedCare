<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vital Care - Patient Management System</title>
</head>
<body>
    <h1 align="center">Vital Care - Patient Management System</h1>

    <p align="center">
        <strong>Streamline patient registration, appointment scheduling, and medical records.</strong><br>
        Built with <code>Next.js</code>, <code>TypeScript</code>, <code>Twilio</code>, and <code>TailwindCSS</code>.
    </p>

    <h2>Overview</h2>
    <p>
        The Vital Care platform is a healthcare solution that simplifies patient management through intuitive patient registration, 
        appointment scheduling, and medical record keeping. It also integrates Twilio SMS notifications to enhance communication between the platform 
        and its users.
    </p>

    <h2>Features</h2>
    <ul>
        <li><strong>Patient Registration:</strong> Secure patient registration with data stored in the Patient collection.</li>
        <li><strong>Appointment Scheduling:</strong> Users can book new appointments and receive appointment confirmation on the success page.</li>
        <li><strong>Admin Dashboard:</strong> Admins can view all patient records, appointment statuses, and modify appointment details (schedule or cancel).</li>
        <li><strong>Notifications:</strong> Patients receive email notifications when an appointment is scheduled or canceled.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Next.js:</strong> Framework for server-rendered React applications.</li>
        <li><strong>TypeScript:</strong> Static type-checking for building reliable code.</li>
        <li><strong>TailwindCSS:</strong> Utility-first CSS framework for building responsive user interfaces.</li>
        <li><strong>Twilio:</strong> Cloud communication platform for sending SMS notifications.</li>
    </ul>

    <h2>Usage</h2>
    <h3>1. User Flow</h3>
    <ul>
        <li><strong>Login:</strong> Users authenticate using a secure login form, and their details are verified and stored.</li>
        <li><strong>Register:</strong> Users register by entering personal details, which are stored in the Patient collection.</li>
        <li><strong>New Appointment:</strong> Users can schedule appointments, and the appointment details are stored in the system.</li>
        <li><strong>Appointment Success:</strong> Users are redirected to a success page after successfully booking an appointment.</li>
    </ul>

    <h3>2. Admin Flow</h3>
    <ul>
        <li><strong>Admin Access:</strong> Admins can access the admin panel using a password key.</li>
        <li><strong>View Records:</strong> Admins can view all patient and appointment details, including appointment status and dates.</li>
        <li><strong>Modify Appointments:</strong> Admins can cancel or schedule appointments as needed.</li>
        <li><strong>Email Notifications:</strong> Patients are notified via email if their appointment status is changed (scheduled or canceled).</li>
    </ul>

    <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-repo/vital-care.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd vital-care</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the development server:
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>

    <h2>Environment Variables</h2>
    <p>Create a <code>.env</code> file in the root of your project and add the following:</p>
    <pre><code>
    NEXT_PUBLIC_TWILIO_ACCOUNT_SID=your-twilio-account-sid
    NEXT_PUBLIC_TWILIO_AUTH_TOKEN=your-twilio-auth-token
    NEXT_PUBLIC_TWILIO_PHONE_NUMBER=your-twilio-phone-number
    </code></pre>

    <h2>Contributing</h2>
    <p>Contributions are welcome! Please feel free to submit a Pull Request.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License.</p>
</body>
</html>
