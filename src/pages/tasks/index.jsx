import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function TasksPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "طراحی صفحه داشبورد",
      description: "طراحی رابط کاربری داشبورد پروژه",
      status: "در حال انجام",
      priority: "زیاد",
    },
    {
      id: 2,
      title: "ساخت API کاربران",
      description: "اتصال پروژه به API کاربران",
      status: "تکمیل شده",
      priority: "متوسط",
    },
    {
      id: 3,
      title: "تست پروژه",
      description: "بررسی عملکرد بخش‌های مختلف پروژه",
      status: "در انتظار",
      priority: "کم",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "در انتظار",
    priority: "متوسط",
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

    if (!formData.title.trim() || !formData.description.trim()) {
      alert("لطفاً عنوان و توضیحات تسک را وارد کنید.");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      ...formData,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setFormData({
      title: "",
      description: "",
      status: "در انتظار",
      priority: "متوسط",
    });

    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            تسک‌ها
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            مدیریت تسک‌های پروژه
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-white transition hover:bg-blue-700"
        >
          <FaPlus />
          افزودن تسک
        </button>
      </div>

      {/* Tasks Table */}
      <div className="overflow-auto rounded-2xl shadow-lg">
        <table className="w-full text-center">
          <thead className="bg-blue-400 dark:bg-blue-900">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">عنوان</th>
              <th className="px-4 py-3">توضیحات</th>
              <th className="px-4 py-3">وضعیت</th>
              <th className="px-4 py-3">اولویت</th>
              <th className="px-4 py-3">عملیات</th>
            </tr>
          </thead>

          <tbody className="bg-gray-200 dark:bg-gray-800">
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-gray-300 dark:border-gray-700"
              >
                <td className="px-4 py-3">{task.id}</td>

                <td className="px-4 py-3 font-medium">
                  {task.title}
                </td>

                <td className="px-4 py-3">
                  {task.description}
                </td>

                <td className="px-4 py-3">
                  {task.status}
                </td>

                <td className="px-4 py-3">
                  {task.priority}
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="flex items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(task.id)}
                      className="flex items-center gap-2 rounded-md bg-red-500 px-3 py-2 text-white transition hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                افزودن تسک جدید
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                اطلاعات تسک را وارد کنید.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  عنوان تسک
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="عنوان تسک را وارد کنید"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  توضیحات
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="توضیحات تسک را وارد کنید"
                  rows="3"
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>

              {/* Status */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  وضعیت
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  <option value="در انتظار">در انتظار</option>
                  <option value="در حال انجام">در حال انجام</option>
                  <option value="تکمیل شده">تکمیل شده</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  اولویت
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  <option value="کم">کم</option>
                  <option value="متوسط">متوسط</option>
                  <option value="زیاد">زیاد</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex flex-1 items-center justify-center rounded-lg border border-gray-300 py-2.5 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  لغو
                </button>

                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center rounded-lg bg-blue-600 py-2.5 text-white transition hover:bg-blue-700"
                >
                  افزودن تسک
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TasksPage;