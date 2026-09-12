import { useState } from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaPlusCircle,
  FaComment,
  FaUser,
  FaEnvelope,
  FaTimes,
  FaSave,
} from "react-icons/fa";

function CommentsPage() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Amir",
      email: "amir@example.com",
      body: "پروژه خیلی خوب پیش رفته است.",
    },
    {
      id: 2,
      name: "Ali",
      email: "ali@example.com",
      body: "بخش داشبورد نیاز به کمی تغییر دارد.",
    },
    {
      id: 3,
      name: "Sara",
      email: "sara@example.com",
      body: "طراحی صفحه خیلی زیبا شده.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.body.trim()
    ) {
      alert("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    const newComment = {
      id: comments.length + 1,
      ...formData,
    };

    setComments((prevComments) => [...prevComments, newComment]);

    setFormData({
      name: "",
      email: "",
      body: "",
    });

    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FaComment className="text-blue-600" />

            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              کامنت‌ها
            </h1>
          </div>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            مدیریت کامنت‌های کاربران
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-white transition hover:bg-blue-700"
        >
          <FaPlusCircle />
          افزودن کامنت
        </button>
      </div>

      {/* Comments Table */}
      <div className="overflow-auto rounded-2xl shadow-lg">
        <table className="w-full text-center">
          <thead className="bg-blue-400 dark:bg-blue-900">
            <tr>
              <th className="px-4 py-3">#</th>

              <th className="px-4 py-3">
                <div className="flex items-center justify-center gap-2">
                  <FaUser />
                  نام
                </div>
              </th>

              <th className="px-4 py-3">
                <div className="flex items-center justify-center gap-2">
                  <FaEnvelope />
                  ایمیل
                </div>
              </th>

              <th className="px-4 py-3">متن کامنت</th>

              <th className="px-4 py-3">عملیات</th>
            </tr>
          </thead>

          <tbody className="bg-gray-200 dark:bg-gray-800">
            {comments.map((comment) => (
              <tr
                key={comment.id}
                className="border-b border-gray-300 dark:border-gray-700"
              >
                <td className="px-4 py-3">
                  {comment.id}
                </td>

                <td className="px-4 py-3 font-medium">
                  {comment.name}
                </td>

                <td className="px-4 py-3">
                  {comment.email}
                </td>

                <td className="px-4 py-3">
                  {comment.body}
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      title="ویرایش"
                      className="flex items-center justify-center rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>

                    <button
                      title="حذف"
                      onClick={() => handleDelete(comment.id)}
                      className="flex items-center justify-center rounded-md bg-red-500 px-3 py-2 text-white transition hover:bg-red-600"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Comment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">
            {/* Modal Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-600" />

                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    افزودن کامنت جدید
                  </h2>
                </div>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  اطلاعات کامنت را وارد کنید.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 transition hover:text-red-500"
                title="بستن"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FaUser />
                  نام
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="نام را وارد کنید"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FaEnvelope />
                  ایمیل
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ایمیل را وارد کنید"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Comment Body */}
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FaComment />
                  متن کامنت
                </label>

                <textarea
                  name="body"
                  value={formData.body}
                  onChange={handleChange}
                  placeholder="متن کامنت را وارد کنید"
                  rows="4"
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 py-2.5 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <FaTimes />
                  لغو
                </button>

                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-white transition hover:bg-blue-700"
                >
                  <FaSave />
                  ذخیره کامنت
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentsPage;