import { NavLink } from "react-router-dom";

export default function IndividualNavLink({ to, end, name, patientNotes }) {
  return (
    <NavLink to={to} end={end} className={({ isActive }) =>
      isActive ? "px-2 py-1 rounded-xl bg-white text-black font-medium"
        : "px-2 py-1 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-black transition"
    }>
      <span className="flex items-center gap-2">
        {name}

        {name === "Notes" && patientNotes && (
          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
            {patientNotes.length}
          </span>
        )}

        {name === ""}
      </span>

    </NavLink>
  )
}