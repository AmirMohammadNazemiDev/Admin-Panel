import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaImages,
  FaSearch,
  FaSpinner,
} from "react-icons/fa";

function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=50"
        );

        setPhotos(response.data);
      } catch (error) {
        console.error(error);
        setError("دریافت تصاویر با مشکل مواجه شد.");
      } finally {
        setIsLoading(false);
      }
    };

    getPhotos();
  }, []);

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FaImages className="text-blue-600" />

            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              گالری تصاویر
            </h1>
          </div>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            ۵۰ تصویر از JSONPlaceholder
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="جستجوی تصویر..."
            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          />
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex min-h-60 items-center justify-center">
          <div className="flex items-center gap-3 text-blue-600">
            <FaSpinner className="animate-spin text-xl" />
            <span>در حال دریافت تصاویر...</span>
          </div>
        </div>
      )}

      {/* Error */}
      {!isLoading && error && (
        <div className="rounded-xl bg-red-100 p-4 text-center text-red-600 dark:bg-red-900/30">
          {error}
        </div>
      )}

      {/* Gallery */}
      {!isLoading && !error && (
        <>
          {filteredPhotos.length === 0 ? (
            <div className="rounded-xl bg-gray-100 p-8 text-center text-gray-500 dark:bg-gray-800 dark:text-gray-400">
              تصویری پیدا نشد.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900"
                >
                  <img
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-4">
                    <p className="mb-2 line-clamp-2 text-sm font-medium text-gray-800 dark:text-white">
                      {photo.title}
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Photo ID: {photo.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default GalleryPage;