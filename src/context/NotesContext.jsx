import { createContext, useState, useEffect } from "react";
import { notesData } from "../data/notesData.js";

//On load
const storedNotes = localStorage.getItem("carearc_notes");
const storedNotesObj = storedNotes ? JSON.parse(storedNotes) : null;

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
    const [notesArray, setNotesArray] = useState(storedNotesObj ? storedNotesObj : notesData);

    useEffect(() => {
        //store item/notes in localStorage
        localStorage.setItem("carearc_notes", JSON.stringify(notesArray))
    }, [notesArray])

    return (
        <NotesContext.Provider value={{ notesArray, setNotesArray }}>{children}</NotesContext.Provider>
    )
}