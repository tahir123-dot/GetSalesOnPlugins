import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlogApi, getBlogsApi } from "../../Store/Blog/blogApi";

const AllBlogs = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogsApi());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this blog?")) {
      dispatch(deleteBlogApi(id));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">All Blogs</h2>
      {loading && <p>Loading...</p>}
      {!loading && blogs.length === 0 && <p>No blogs found.</p>}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded shadow p-4 flex flex-col justify-between"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover rounded mb-3"
            />
            <h3 className="font-semibold">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-3">
              {blog.description.slice(0, 80)}...
            </p>
            <button
              onClick={() => handleDelete(blog._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
