import { useContext } from "react";
import { PatientDetailContext } from "../context/PatientsDetailContext"

export default function PersonalizedNotes() {

    const { patientNotes } = useContext(PatientDetailContext)
    return (
        <div className="flex flex-col gap-2 border border-gray-200 shadow-sm rounded-xl w-full px-6 py-5 bg-white">
            {patientNotes && patientNotes.length > 0 ? (
                patientNotes.map((note) => (
                    <span className="flex flex-col list-disc" key={note.createdAt}>{note.content}</span>
                ))
            ) : (
                <span>No notes entered for this patient</span>)}
        </div>
    )
}