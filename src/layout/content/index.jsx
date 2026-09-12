import { Navigate, Route, Routes } from "react-router";
import UsersPage from "../../pages/users";
import PostsPage from "../../pages/posts";
import CommentsPage from "../../pages/comments";
import TasksPage from "../../pages/tasks";
import GalleryPage from "../../pages/gallery";
import AddUserPage from "../../pages/users/add-user";

function Content() {
  return (
    <div className="fixed inset-0 bg-gray-100 pt-16 pr-64 dark:bg-gray-800">
      <div className="h-full w-full overflow-y-auto p-4">
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUserPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route
            path="/"
            element={<Navigate to="/users" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Content;