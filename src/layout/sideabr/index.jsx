import { NavLink } from "react-router";

function Sidebar() {
  return (
    <div className="fixed right-0 h-screen w-64 bg-blue-500 shadow-lg">
      {/* {top content} */}
      <div className="flex justify-between items-center h-16 p-2 rounded-t-lg shadow-md bg-blue-600 text-white">
        <div>
          <h1>داشبورد</h1>
        </div>
        <div>
          <h1>Darkmode</h1>
        </div>
      </div>

      {/* {menu content} */}
      <div className="flex flex-1 flex-col gap-4 p-4 bg-blue-400 rounded-b-lg h-full">
        <ul className="text-white">
          <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">
            <NavLink to={"/users"}>کاربران</NavLink>
          </li>
          <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">
            <NavLink to={"/posts"}>پست ها</NavLink>
          </li>
          <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">
            <NavLink to={"/comments"}>کامنت ها</NavLink>
          </li>
          <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">
            <NavLink to={"/tasks"}>تسک ها</NavLink>
          </li>
          <li className="hover:bg-blue-500 p-2 rounded cursor-pointer">
            <NavLink to={"/gallery"}>گالری</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Sidebar;