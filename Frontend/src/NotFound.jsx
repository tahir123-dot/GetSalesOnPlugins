import React from "react";
import { Link } from "react-router-dom";

const NoteFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-xl mb-2">Page Not Found</p>
      <p className="mb-4 text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NoteFound;
