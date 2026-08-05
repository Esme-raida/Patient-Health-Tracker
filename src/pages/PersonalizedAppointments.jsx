import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CalendarIcon } from "lucide-react";
import IndividualAppointment from "../components/Individualappointment";
import { PatientDetailContext } from "../context/PatientsDetailContext";

export default function PersonalizedAppointments() {

    const { appointmentsList } = useContext(PatientDetailContext);
    const { patientsId: currentPatientId } = useParams(); //this is the current patient ID


    const patientAppointments = appointmentsList.filter(appointment => appointment.patientId === currentPatientId)

    //CREATING A STATUS FUNCTIONALITY FOR COMPARISON
    const getStatus = (newAppointment) => {


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

        const appointmentDateTime = new Date(`${newAppointment.date} ${newAppointment.time}`); //combining the date and time together.
        const appointmentEndTime = new Date(appointmentDateTime.getTime() + newAppointment.duration * 60000);

        //FOR GETTING THE STATUS FOR THE STATUS BADGE
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



    const todayAppointments = patientAppointments.filter((newAppointment) => {
        const today = new Date();
        const appointmentDate = new Date(newAppointment.date);

        return appointmentDate.toDateString() === today.toDateString();
    });


    return (
        <div>
            <div className="flex flex-col gap-2 border border-gray-200 shadow-sm rounded-xl w-full px-6 py-5 bg-white">
                {patientAppointments && patientAppointments.length > 0 ? (
                    <section className="flex flex-col gap-1">
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
                            <span>No Appointments for today</span>
                        )}
                    </section>
                ) : (
                    <span> No Appointments for this patient yet</span>
                )}
            </div>
        </div>
    )
}