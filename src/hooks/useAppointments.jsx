import { useContext } from "react";
import { AppointmentsContext } from "../context/AppointmentsContext";


export default function useAppointments() {
    return useContext(AppointmentsContext);
}