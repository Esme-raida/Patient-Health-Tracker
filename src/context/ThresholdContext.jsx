import { createContext, useState } from "react";

//createContext ----> This is just like an empty box, it is like I am making a box of information 
// that any component wrapped in this box can tap into it and make use of it.

export const ThresholdContext = createContext();

//This is like a wrapper for the app, a container that holds the data in 
//memory and shares it with every component inside it.
export default function ThresholdProvider({ children }) {
    //Components in here can make use of the details in the thresholdContext
    //Children, this is the individual components...this components will get 
    //access to the box because they are inside the provider

    //the actual content of the context in state
    const [thresholds, setThresholds] = useState({
        heartRate: { min: 60, max: 100 },
        bloodPressure: { min: 90, max: 140 },
        oxygen: { min: 90, max: 95 },
        temperature: { min: 35.5, max: 38.0 }
    });

    return (
        //This is actually what shares the data with the components
        //We put content inside the createContext (box) using the Provider 
        <ThresholdContext.Provider value={{ thresholds, setThresholds }}>
            {children}
        </ThresholdContext.Provider>
    )
}


