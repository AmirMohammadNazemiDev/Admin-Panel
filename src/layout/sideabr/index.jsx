import Darkmode from "../../components/Darkmode";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <div className="fixed right-0 h-screen w-64 shadow-lg">
      {/* {top content} */}
      <div className="flex justify-between items-center h-16 p-2 rounded-t-lg shadow-md bg-blue-600 dark:bg-gray-900">
        <div>
          <h1>داشبورد</h1>
        </div>
        <div>
          <Darkmode/>
        </div>
      </div>

      {/* {menu content} */}
      <div className="flex flex-1 flex-col gap-4 p-4 bg-blue-200 rounded-b-lg h-full dark:bg-gray-900">
        <ul>
          <SidebarItem to={"/users"}>کاربران</SidebarItem>
          <SidebarItem to={"/posts"}>پست ها</SidebarItem>
          <SidebarItem to={"/comments"}>کامنت ها</SidebarItem>
          <SidebarItem to={"/tasks"}>تسک ها</SidebarItem>
          <SidebarItem to={"/gallery"}>گالری</SidebarItem>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;