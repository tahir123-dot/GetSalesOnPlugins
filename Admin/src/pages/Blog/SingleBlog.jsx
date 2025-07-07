import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBlogApi } from "../../Store/Blog/blogApi";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const { selectedBlog, loading } = useSelector((state) => state.blog);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleBlogApi(id));
  }, [dispatch, id]);

  if (loading || !selectedBlog) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
      <img
        src={selectedBlog.image}
        alt={selectedBlog.title}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <p className="text-gray-700 leading-7 whitespace-pre-line">
        {selectedBlog.description}
      </p>
    </div>
  );
};

export default SingleBlog;
