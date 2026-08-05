import { Link } from "react-router-dom";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { SearchIcon } from "lucide-react";
import { patientColumns } from "../data/patientsData.js";
import { useState } from "react";
import usePatients from "../hooks/usePatients";
import useVitals from "../hooks/useVitals";

export default function Patients() {

    const { patientsArray } = usePatients();
    const { vitalsArray } = useVitals();

    const [searchValue, setSearchValue] = useState("");
    const filteredPatients = patientsArray.filter(patient =>
        (patient.name || "").toLowerCase().includes(searchValue))

    return (
        <main className="flex flex-col min-h-screen px-7 bg-gray-100">

            <div className="flex flex-row justify-between">
                <header className="mb-8">
                    <div className="flex flex-row  gap-1.5 mt-5 text-2xl font-bold w-60 pt-1">
                        <UserGroupIcon className="mt-0.5 h-8 w-8 mb-3 text-blue-500" />
                        <h1 className="mt-0.5">
                            Patient Directory
                        </h1>
                    </div>
                    <p className="text-gray-500">Manage and monitor patient records and basic information</p>
                </header>
                <Link to="/dashboard/patients/addpatientpage">
                    <button
                        className="mt-5 bg-blue-600 text-white px-3 py-1 h-10 rounded-md hover:cursor-pointer hover:scale-105 hover:bg-blue-800">
                        + Add Patient
                    </button>
                </Link>
            </div>
            <div className="mb-5 relative text-gray-500">
                <input
                    aria-label="Search Patients by name"
                    placeholder="Search patients"
                    className="w-5/12 border border-gray-200 bg-white rounded-xl shadow-sm outline-0 pl-10 px-4 py-1.5 placeholder:text-gray-500"
                    onChange={(e) => {
                        setSearchValue(e.target.value.toLowerCase().trim());
                    }} />
                <SearchIcon
                    className="absolute left-3 -top-0.5 h-10 p-0.5" />
            </div>

            <section className="flex flex-col gap-5 justify-between border border-gray-200 shadow-sm rounded-xl w-full px-6 py-8 bg-white">
                <span className="text-2xl font-semibold">All Patients ({filteredPatients.length}) </span>
                <table className="w-full">

                    <thead className="border-b border-gray-200 pb-2">
                        <tr>
                            {patientColumns.map((column) => (
                                <th key={column.key} scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-500">
                                    {column.label}
                                </th>
                            ))}

                            <th scope="col" className="px-4 py-3 text-gray-500 text-sm text-left font-semibold">Last Vitals</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredPatients.map((patient) => {
                            const patientVitals = vitalsArray.filter((vitals) => vitals.patientId === patient.id);
                            let latestVitalTime = null
                            //sort between a & b such that it makes use of subtraction
                            //assuming a = 2 and b = 5, sort runs 2-5, this is -3, so in this case it means 2 < 5
                            //meaning a comes before b, and it returns negative..
                            //if b comes before a, it returns positive....i.e
                            //if the order remains, it returns 0.
                            const latestVitals = patientVitals.length > 0 ? patientVitals.reduce((latest, current) =>
                                new Date(current.timestamp) > new Date(latest.timestamp) ? current : latest
                            ) : null;
                            latestVitalTime = latestVitals ? latestVitals.timestamp.split("T")[1].slice(0, 5) : null;


                            //for every patient in the patients array, create a table row
                            return (
                                <tr key={patient.id} className="border-b border-b-gray-100">
                                    {/*Inside each row....loop through the columns*/}
                                    {patientColumns.map((column) => (
                                        //for each column in the patientsColumn array, create one table cell
                                        <td key={column.key} className="px-4 py-3 text-sm text-gray-700 text-left hover:cursor-pointer">
                                            {column.key === "name" ? (
                                                //If the column is a name --- I'll use link cause Ineed it to be a link
                                                <Link to={`/dashboard/patients/patientsdetail/${patient.id}`}
                                                    className="font-semibold text-blue-800">{patient[column.key]}</Link>
                                            ) : (
                                                patient[column.key]
                                            )}
                                        </td>
                                    ))}
                                    {/* That is for each patient, for each column, show patient[propertyName] */}

                                    {/*For the part added manually and not in the loop*/}
                                    <td className="px-4 py-3 text-sm text-gray-700 text-left">
                                        {latestVitalTime ?? <span className="text-gray-400">No vitals</span>}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </main>

    )
}

