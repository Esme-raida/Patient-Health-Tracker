import { createContext, useState, useEffect } from "react";
import { patients } from "../data/patientsData.js";

//On load, checks localStorage for stored patients
const storedPatients = localStorage.getItem("carearc_patients"); /*Getting stored patients from local storage*/
const storedPatientsObj = storedPatients ? JSON.parse(storedPatients) : null; /*Checking if stored patients exists,
if it does, convert from a JSON string to Javascript object/data, else return null */


export const PatientsContext = createContext();

export default function PatientsProvider({ children }) {

    const [patientsArray, setPatientsArray] = useState(storedPatientsObj ? storedPatientsObj : patients);

    //On change, this will run every time 'patientsArray' changes
    useEffect(() => {
        //Writes to localStorage, converting the state (patientsArray) into a JSON string before saving it
        localStorage.setItem("carearc_patients", JSON.stringify(patientsArray))
    }, [patientsArray])
    //return the data to the consumer components
    return (
        <PatientsContext.Provider value={{ patientsArray, setPatientsArray }}>
            {children}
        </PatientsContext.Provider>
    )
}