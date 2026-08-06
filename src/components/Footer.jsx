import { Link } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline"
export default function Footer() {
    return (
        <footer className="mt-auto flex flex-row justify-between px-5 py-2 border-t border-t-gray-200">
            <div className="flex flex-row py-2.5 gap-2 items-center">
                <Link to="/">
                    <HeartIcon className="w-10 h-10 px-2.5 bg-blue-500 text-white rounded-md hover:scale-105 hover:cursor-pointer hover:bg-blue-700" />
                </Link>
                <div className="flex flex-col">
                    <h1 className="flex flex-row text-2xl font-bold">
                        CareArc
                    </h1>
                </div>
            </div>
            <div className="text-gray-500">
                © 2025 CareArc. All Rights Reserved
            </div>
        </footer>
    )
}