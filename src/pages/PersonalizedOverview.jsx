import { useContext } from "react";
import { PatientDetailContext } from "../context/PatientsDetailContext";

export default function PersonalizedOverview() {
    const { latestVital } = useContext(PatientDetailContext);
    let lastRecorded = "";

    // Calculate time difference
    if (latestVital) {
        //For Time
        const latestVitalTime = new Date(latestVital.timestamp);
        const nowTime = new Date();
        const difference = nowTime - latestVitalTime;
        const diffMins = Math.floor(difference / 60000);

        lastRecorded = diffMins < 60
            ? `${diffMins} ${diffMins === 1 ? "minute" : "minutes"} ago`
            : diffMins < 1440 //show hours (60-1439 mins = 1-23 hours)
                ? `${Math.floor(diffMins / 60)} ${Math.floor(diffMins / 60) === 1 ? "hour" : "hours"} ago`
                : `${Math.floor(diffMins / 1440)} ${Math.floor(diffMins / 1440) === 1 ? "day" : "days"} ago`;

        //For Heart Rate
        //COME BACK TO THIS 
        const heartRate = latestVital.heartRate;
    }

    return (
        <div className="flex flex-col gap-2 border border-gray-200 shadow-sm rounded-xl w-full px-6 py-5 bg-white">
            <h2 className="font-semibold">Recent Activity</h2>
            {!latestVital ? (
                <span>No recent vitals recorded</span>
            ) : (
                <span>Vitals recorded {lastRecorded}</span>
            )}
        </div>
    )
}