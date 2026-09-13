import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Darkmode from "../../components/Darkmode";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`fixed right-0 top-0 z-50 h-screen shadow-lg transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex h-16 items-center justify-between rounded-t-lg bg-blue-600 p-2 shadow-md dark:bg-gray-900">
        {isOpen && (
          <div>
            <h1>داشبورد</h1>
          </div>
        )}

        <div className={`flex items-center ${!isOpen ? "w-full justify-center" : "gap-3"}`}>
          {isOpen && <Darkmode />}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-blue-500 dark:hover:bg-gray-700"
          >
            {isOpen ? <FiChevronRight size={22} /> : <FiChevronLeft size={22} />}
          </button>
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 rounded-b-lg bg-blue-200 p-4 dark:bg-gray-900">
        <ul>
          <SidebarItem to="/users">{isOpen && "کاربران"}</SidebarItem>
          <SidebarItem to="/posts">{isOpen && "پست ها"}</SidebarItem>
          <SidebarItem to="/comments">{isOpen && "کامنت ها"}</SidebarItem>
          <SidebarItem to="/tasks">{isOpen && "تسک ها"}</SidebarItem>
          <SidebarItem to="/gallery">{isOpen && "گالری"}</SidebarItem>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;