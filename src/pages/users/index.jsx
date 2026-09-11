import { useEffect, useState } from "react";
import { getUsersService } from "../../services/users";
import { FaUserPlus } from "react-icons/fa";
import UsersTable from "./UsersTable";
import { Link } from "react-router";

function UsersPage() {
  const [users, setUsers] = useState([]);

  const handelGetUsers = async () => {
    try {
      const data = await getUsersService();
      setUsers(data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelGetUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">مدیریت کاربران</h1>
        <Link to={"/users/add"} className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <FaUserPlus />
          <span>افزودن کاربر</span>
        </Link>
      </div>
      <UsersTable users={users} />
    </div>
  );
}

export default UsersPage;
