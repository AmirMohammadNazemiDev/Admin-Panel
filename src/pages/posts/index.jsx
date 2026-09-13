import { useEffect, useState } from "react";
import axios from "axios";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">
          در حال دریافت پست‌ها...
        </p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          پست‌ها
        </h1>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          لیست پست‌های کاربران
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-gray-900"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-400">
                #{post.id}
              </span>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                User {post.userId}
              </span>
            </div>

            <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
              {post.title}
            </h2>

            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;