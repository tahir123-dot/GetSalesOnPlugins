import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlogApi } from "../../store/Blog/getSingleBlogApi";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleBlog, loading, error } = useSelector((state) => state.blog);
  console.log("ya dhek", singleBlog);

  useEffect(() => {
    if (id) {
      dispatch(getSingleBlogApi(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-blue-500 font-semibold text-lg">
        Loading blog details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold text-lg">
        Error: {error}
      </div>
    );
  }

  if (!singleBlog) {
    return (
      <div className="text-center py-20 text-gray-500 font-medium">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <img
        src={singleBlog.image}
        alt={singleBlog.title}
        className="w-full h-96 object-cover rounded-md mb-10"
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {singleBlog.title}
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        {singleBlog.description}
      </p>
    </div>
  );
};

export default BlogDetail;
