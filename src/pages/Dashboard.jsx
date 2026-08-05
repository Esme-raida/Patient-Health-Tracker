import { UserGroupIcon, DocumentDuplicateIcon, CalendarIcon, UserPlusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Clock4Icon } from "lucide-react";
import DashboardCard from "../components/DashboardCard";
import StatCard from "../components/StatCard";
import IndividualAppointment from "../components/Individualappointment";
import DashboardQuickActions from "../components/DashboardQuickActions";
import useAppointments from "../hooks/useAppointments";

export default function Dashboard() {

    const { appointmentsList } = useAppointments();

    const today = new Date();

    // Filter today's appointments
    const todayAppointments = appointmentsList.filter((appointment) => {
        const appointmentDate = new Date(appointment.date);
        return appointmentDate.toDateString() === today.toDateString();
    });

    // Pending appointments (today)
    const pendingAppointments = todayAppointments.filter((appointment) => !appointment.isCompleted).slice(0, 4);

    return (
        <main className="px-7 min-h-screen">
            {/* Header */}
            <header className="mb-8">
                <div className="flex flex-row gap-1.5 mt-5 text-2xl font-bold w-60 pt-1">
                    <h1 className="mt-0.5">Clinic Dashboard</h1>
                </div>
                <p className="text-gray-500">Overview of Patients & Appointments</p>
            </header>

            {/* Stat Cards */}
            <section className="flex flex-col gap-5 mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <StatCard cardLabel="Total Patients" CardValue="156" icon={UserGroupIcon} iconColor="text-blue-500" />
                    <StatCard cardLabel="Today's Appointments" CardValue={todayAppointments.length} icon={CalendarIcon} iconColor="text-green-500" />
                    <StatCard cardLabel="Pending Visits" CardValue="8" icon={DocumentDuplicateIcon} iconColor="text-amber-500" />
                    <StatCard cardLabel="Newly Registered Patients" CardValue="3" icon={UserGroupIcon} iconColor="text-purple-500" />
                </div>
            </section>

            {/* Recent Patients / Appointments */}
            <section className="flex flex-row gap-5 mb-5">
                <DashboardCard
                    className="flex justify-between w-3/4"
                    cardTitle="Recently Updated Records"
                    iconColor="text-purple-500"
                    icon={UserGroupIcon}
                    action={<span className="flex flex-row font-semibold">View All</span>}
                >
                    {/* Optionally, list some recent patients here */}
                </DashboardCard>

                <DashboardCard className="flex flex-col" cardTitle="Today's Appointments" iconColor="text-blue-500" icon={Clock4Icon}>
                    <div className="flex flex-col gap-2">
                        {pendingAppointments.length === 0 ? (
                            <p className="text-gray-500">No appointments today</p>
                        ) : (
                            pendingAppointments.map((appointment) => (
                                <IndividualAppointment
                                    key={appointment.id}
                                    className="flex justify-between text-sm"
                                    name={appointment.name}
                                    appointmentType={appointment.type}
                                    timing={appointment.time}
                                    duration={appointment.duration}
                                    state={appointment.isCompleted ? "Completed" : "Upcoming"}
                                />
                            ))
                        )}
                    </div>
                </DashboardCard>
            </section>

            {/* Quick Actions */}
            <h2 className="font-semibold mt-5 mb-3">Quick Actions</h2>
            <div className="flex flex-row gap-3 mb-5">
                <DashboardQuickActions quickActionTitle="Add Patient" icon={UserPlusIcon} />
                <DashboardQuickActions quickActionTitle="New Appointment" icon={PlusIcon} />
                {/* Future actions like Generate Report or Configure Alerts can be added later */}
            </div>
        </main>
    );
}