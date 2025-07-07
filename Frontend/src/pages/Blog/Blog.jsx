import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsApi } from "../../store/Blog/getBlogsApi";
import { Link } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogsApi());
  }, [dispatch]);

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Blog</h1>
        <p className="mt-4 text-gray-600">
          Stay updated with the latest tips, tutorials, and tools for producers,
          sound designers, and musicians.
        </p>
      </div>

      {/* Blog Grid */}
      {loading ? (
        <p className="text-center text-blue-500">Loading blogs...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              to={`/blog/${blog._id}`}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {blog.description.slice(0, 100)}...
                </p>
                <span className="inline-block mt-4 text-indigo-600 font-medium hover:underline">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
