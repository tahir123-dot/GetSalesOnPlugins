import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDownloads } from "../../store/Download/downloadApi";

const Download = () => {
  const dispatch = useDispatch();
  const { downloads, loading, error } = useSelector((state) => state.download);

  useEffect(() => {
    dispatch(fetchDownloads()); // userId token se milega (verifyToken middleware se)
  }, [dispatch]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Downloads</h2>

      {loading ? (
        <p className="text-blue-500">Loading your downloads...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : downloads.length === 0 ? (
        <p className="text-gray-500">No downloads available yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-sm text-gray-600">
                <th className="p-3 whitespace-nowrap">Product</th>
                <th className="p-3 whitespace-nowrap">Downloads remaining</th>
                <th className="p-3 whitespace-nowrap">Expires</th>
                <th className="p-3 whitespace-nowrap">Download</th>
              </tr>
            </thead>
            <tbody>
              {downloads.map((item) => (
                <tr key={item._id} className="border-b text-sm">
                  <td className="p-3 whitespace-nowrap">{item.name}</td>
                  <td className="p-3 whitespace-nowrap">∞</td>
                  <td className="p-3 whitespace-nowrap">Never</td>
                  <td className="p-3 whitespace-nowrap">
                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 rounded-full px-4 py-1 hover:bg-gray-300 text-sm whitespace-nowrap"
                    >
                      Click Here To Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Download;
