import { createContext, useState, useEffect } from "react";
import { appointmentsData } from "../data/appointmentData.js";

const storedAppointments = localStorage.getItem("carearc_appointments");
const storedAppointmentsObj = storedAppointments ? JSON.parse(storedAppointments) : appointmentsData;

export const AppointmentsContext = createContext();

export default function AppointmentsProvider({ children }) {
    const [appointmentsList, setAppointmentsList] = useState(storedAppointmentsObj);

    useEffect(() => {
        localStorage.setItem("carearc_appointments", JSON.stringify(appointmentsList));
    }, [appointmentsList])

    return (
        <AppointmentsContext.Provider value={{ appointmentsList, setAppointmentsList }}>{children}</AppointmentsContext.Provider>
    )
}