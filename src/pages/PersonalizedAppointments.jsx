import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import IndividualAppointment from "../components/Individualappointment";
import { PatientDetailContext } from "../context/PatientsDetailContext";

export default function PersonalizedAppointments() {

    const { appointmentsList, patient } = useContext(PatientDetailContext);
    const { patientsId: currentPatientId } = useParams(); //this is the current patient ID

    //CREATING A STATUS FUNCTIONALITY FOR COMPARISON
    const getStatus = (newAppointment) => {
        // We put the date variables back inside the function so it works!
        const today = new Date();
        const todayDateOnly = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
        );

        const appointmentDate = new Date(newAppointment.date);
        const appointmentDateOnly = new Date(
            appointmentDate.getFullYear(),
            appointmentDate.getMonth(),
            appointmentDate.getDate()
        );

        const appointmentDateTime = new Date(`${newAppointment.date} ${newAppointment.time}`);
        const appointmentEndTime = new Date(appointmentDateTime.getTime() + newAppointment.duration * 60000);

        if (newAppointment.isCompleted) return "completed";

        if (appointmentDateOnly.getTime() === todayDateOnly.getTime()) {
            if (appointmentDateTime > today) {
                return "upcoming";
            } else if (today >= appointmentDateTime && today <= appointmentEndTime) {
                return "ongoing";
            } else return "missed";
        } else if (appointmentDateOnly > todayDateOnly) {
            return "scheduled";
        } else return "missed";
    }

    //FILTERING APPOINTMENTS 
    //Today's appointments
    const todayAppointments = patientAppointments.filter((newAppointment) => {
        const today = new Date();
        const appointmentDate = new Date(newAppointment.date);
        return appointmentDate.toDateString() === today.toDateString();
    });

    //Future Appointments using getStatus
    const upcomingAppointments = patientAppointments.filter((appointment) => getStatus(appointment) === "scheduled")

    return (
        <div>
            <div className="flex flex-col gap-2 border border-gray-200 shadow-sm rounded-xl w-full px-6 py-5 bg-white">
                {patientAppointments && patientAppointments.length > 0 ? (
                    <>
                        <section className="flex flex-col gap-1">

                            {/*Today's Appointments*/}
                            <span className="font-bold mb-2">Appointments Today</span>
                            {todayAppointments.length > 0 ? (
                                todayAppointments.map((appointment) => (
                                    <IndividualAppointment
                                        key={appointment.id}
                                        appointmentType={appointment.type}
                                        timing={appointment.time}
                                        duration={appointment.duration}
                                        state={getStatus(appointment)} />
                                ))
                            ) : (
                                <span className="text-gray-500 text-sm">No appointments scheduled for today.</span>
                            )}
                        </section>
                        <section className="flex flex-col gap-2">

                            {/*Upcoming Scheduled Visits*/}
                            <span className="font-bold text-gray-700 mb-2">Upcoming Scheduled Visits</span>
                            {upcomingAppointments.length > 0 ? (
                                upcomingAppointments.map((appointment) => (
                                    <IndividualAppointment
                                        key={appointment.id}
                                        appointmentType={appointment.type}
                                        timing={`${appointment.date} @ ${appointment.time}`} // Shows date & time
                                        duration={appointment.duration}
                                        state={getStatus(appointment)} />
                                ))
                            ) : (
                                <span className="text-gray-500 text-sm">No upcoming appointments scheduled.</span>
                            )}
                        </section>
                    </>
                ) : (
                    <span className="text-gray-500">No appointments recorded for this patient.</span>
                )}
            </div>
        </div>
    )
}