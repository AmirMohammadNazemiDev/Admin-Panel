import { NavLink } from "react-router";

const SidebarItem = ({ to, children, icon: Icon, isOpen }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-lg p-2 transition hover:bg-blue-100 dark:hover:bg-gray-700 ${
            isActive ? "bg-blue-300 dark:bg-gray-800" : ""
          } ${!isOpen ? "justify-center" : ""}`
        }
      >
        <Icon size={22} />

        {isOpen && <span>{children}</span>}
      </NavLink>
    </li>
  );
};

export default SidebarItem;