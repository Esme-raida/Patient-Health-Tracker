import IndividualPage from "./Individualpage";
import { Link } from "react-router-dom";
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import { SettingsIcon, CalendarIcon, LayoutDashboardIcon } from "lucide-react";
import { HeartIcon } from "lucide-react";
{/*This is what triggers navigation in the dashboard
    Link is a special component that replaces <a> in html, 
    but it does not reload page, updates url internally and lets react swap <outlet /> content*/}

function Sidebar() {
    return (
        <div className="flex flex-col justify-between min-h-full border-r border-r-gray-200 bg-white">


            <div className="flex flex-col p-4 pt-8 gap-5 ">

                {/*Header*/}
                <div className="flex flex-row gap-2 items-center border-b border-b-gray-300 pb-4">
                    <Link to="/">
                        <HeartIcon className="w-10 h-10 px-2.5 bg-blue-500 text-white rounded-md hover:scale-105 hover:cursor-pointer hover:bg-blue-700" />
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="flex flex-row text-2xl font-bold">
                            CareArc
                        </h1>
                        <span className="text-gray-500">Clinic System</span>
                    </div>
                </div>

                {/*Nav Links*/}
                <div className=" text-gray-600">
                    <h2 className="text-gray-500 pl-4.5 mb-2"> Navigation </h2>
                    <IndividualPage Icon={LayoutDashboardIcon} name="Clinic Dashboard" to="/dashboard" />
                    <IndividualPage Icon={CalendarIcon} name="Appointments" to="/dashboard/appointments" />
                    <IndividualPage Icon={UserGroupIcon} name="Patients" to="/dashboard/patients" />
                    <IndividualPage Icon={SettingsIcon} name="Settings" to="/dashboard/settings" />
                </div>
            </div>


            {/*Staff Profile*/}
            <div className="flex flex-row gap-3 m-5 py-5 border-t border-t-gray-300">
                <Link to="/dashboard/settings/profile">
                    <UserIcon className="w-12 p-1.5 rounded-lg bg-gray-100 text-gray-400 hover:bg-gray-400 hover:text-gray-600" />
                </Link>
                <div className="font-semibold ">
                    <h1>Staff Account</h1>
                    <span className="text-gray-400">Records Department</span>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
