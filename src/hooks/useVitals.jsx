import { useContext } from "react";
import { VitalsContext } from "../context/VitalsContext";

export default function useVitals() {
    return useContext(VitalsContext);
}