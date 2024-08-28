// Login (Auth verifies and  stores the details)--register with personal Details(Patient collectios stores the details)--New appointment(stores appointment details)--Appointment success page
// Admin--use password key-- Can see allpatient,appointment,status,date of appointment--there admin can cancel,schedule appointments.
//If it is scheduled or cancelled,the user gets mail regarding that

import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
// asynchronous function (getRecentAppointmentList) that fetches a list of recent appointments, including their status counts (e.g., scheduled, pending, and cancelled).
const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
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

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>
        {/* Three StatCard components displaying statistics for scheduled, pending, and cancelled appointments. Each StatCard is passed a type, count, label, and icon. */}
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
