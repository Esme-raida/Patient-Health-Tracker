import { useContext } from "react";
import { PatientsContext } from "../context/PatientsContext";

export default function usePatients() {
    return useContext(PatientsContext)
}