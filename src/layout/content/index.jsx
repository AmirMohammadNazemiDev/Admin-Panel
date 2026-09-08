import { Route, Routes } from "react-router";
import UsersPage from "../../pages/users";
import PostsPage from "../../pages/posts";
import CommentsPage from "../../pages/comments";
import TasksPage from "../../pages/tasks";
import GalleryPage from "../../pages/gallery";

function Content() {
  return (
    <div className="fixed top-0 left-0 pt-16 pr-64 bg-gray-100 h-screen w-screen dark:bg-gray-800">
      <div className="p-4 h-full w-full">
        <Routes>
          <Route path="/users" element={<UsersPage/>} />
          <Route path="/posts" element={<PostsPage/>} />
          <Route path="/comments" element={<CommentsPage/>}/>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/gallery" element={<GalleryPage/>}/>
        </Routes>
      </div>
    </div>
  );
}



export default Content;
