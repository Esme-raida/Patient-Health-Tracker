import { useContext } from "react";
import { ThresholdContext } from "../context/ThresholdContext";

//creating this custom hook to avoid repetition all over 
export  default function useThresholds() { 
//use threshold is a shortcut, any component that calls it can grab the thresholdContext box and everything inside it
    return useContext(ThresholdContext);
}