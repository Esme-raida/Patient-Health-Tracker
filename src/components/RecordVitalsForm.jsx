import { useState } from "react";
import InputComponent from './InputComponent';


export default function RecordVitalsForm({ setIsVitalFormOpen, setVitalsArray, patientId }) {

    const [formData, setFormData] = useState({
        heartRate: "",
        systolic: "",
        diastolic: "",
        oxygen: "",
        temperature: "",
        respiratoryRate: "",
        recordedBy: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        const newVitals = {
            id: `VIT-${Date.now()}`, // A unique ID for the new vital
            patientId: patientId,
            timestamp: new Date().toISOString(), //the date the vital was recorded

            heartRate: Number(formData.heartRate), //converting the string to a number 
            bloodPressure: {
                systolic: Number(formData.systolic), //converting the string to a number 
                diastolic: Number(formData.diastolic), //converting the string to a number 
            },
            oxygen: Number(formData.oxygen), //converting the string to a number 
            temperature: Number(formData.temperature), //converting the string to a number 
            respiratoryRate: Number(formData.respiratoryRate), //converting the string to a number 
            recordedBy: formData.recordedBy //the staff or doctor who recorded the vital
        }

        setVitalsArray(prev => [...prev, newVitals]);
        setFormData({
            heartRate: "",
            systolic: "",
            diastolic: "",
            oxygen: "",
            temperature: "",
            respiratoryRate: "",
            recordedBy: ""
        });
        setIsVitalFormOpen(false);

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[75%] max-h-[96vh] mt-4 mx-auto bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden">
            <div className="flex flex-col gap-4 px-6 py-5 overflow-y-auto">
                <div className="flex justify-center">
                    <h2 className="font-semibold text-2xl mb-5">Record Vitals</h2>
                </div>

                <div className="flex flex-col gap-4">
                    <InputComponent
                        label="Patient ID"
                        value={patientId} //makes the input display what is in the input box
                        disabled
                    />

                    <InputComponent
                        label="HeartRate"
                        placeholder="75"
                        type="number"
                        value={formData.heartRate}
                        onChange={(e) => {
                            setFormData({ ...formData, heartRate: e.target.value });
                        }}
                    />

                    <InputComponent
                        label="Systolic BP"
                        placeholder="120"
                        type="number"
                        value={formData.systolic}
                        onChange={(e) => {
                            setFormData({ ...formData, systolic: e.target.value });
                        }}
                    />

                    <InputComponent
                        label="Diastolic BP"
                        placeholder="80"
                        type="number"
                        value={formData.diastolic}
                        onChange={(e) => {
                            setFormData({ ...formData, diastolic: e.target.value });
                        }}
                    />

                    <InputComponent
                        label="Oxygen"
                        placeholder="97"
                        type="number"
                        value={formData.oxygen}
                        onChange={(e) => {
                            setFormData({ ...formData, oxygen: e.target.value });
                        }}
                    />

                    <InputComponent
                        label="Temperature"
                        placeholder="37.4"
                        type="number"
                        value={formData.temperature}
                        onChange={(e) => {
                            setFormData({ ...formData, temperature: e.target.value });
                        }}
                    />

                    <InputComponent
                        label="Respiratory Rate"
                        placeholder="18"
                        type="number"
                        value={formData.respiratoryRate}
                        onChange={(e) => {
                            setFormData({ ...formData, respiratoryRate: e.target.value });
                        }}
                    />

                    <InputComponent
                        label="Recorded By"
                        placeholder="Nurse Fatima"
                        type="text"
                        value={formData.recordedBy}
                        onChange={(e) => {
                            setFormData({ ...formData, recordedBy: e.target.value });
                        }}
                    />


                    <button type="submit"
                        className="border rounded-md border-gray-300 bg-blue-500 text-white py-1 mt-5">
                        Add Vitals
                    </button>
                </div>
            </div>
        </form>
    )
}

