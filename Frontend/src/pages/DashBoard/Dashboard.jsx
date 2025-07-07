import React, { useState } from "react";
import Order from "./Order";
import Download from "./Download";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <h2 className="text-2xl font-semibold">Welcome to your Dashboard</h2>
        );
      case "Orders":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Here are your Orders
            </h2>
            <Order />
          </div>
        );
      case "Downloads":
        return <Download />;
      case "Logout":
        return (
          <h2 className="text-2xl font-semibold text-red-500">
            You have been logged out
          </h2>
        );
      default:
        return null;
    }
  };

  const menuItems = [
    { label: "Dashboard", icon: "🎛️" },
    { label: "Orders", icon: "🛒" },
    { label: "Downloads", icon: "📥" },
    { label: "Logout", icon: "🚪" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">My Dashboard</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-xl"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-white border-r p-4 md:p-0`}
      >
        <ul className="space-y-1 md:p-4">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`flex items-center space-x-2 px-4 py-2 rounded cursor-pointer ${
                activeTab === item.label
                  ? "bg-gray-100 font-semibold"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => {
                setActiveTab(item.label);
                setIsSidebarOpen(false); // close sidebar on mobile
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 md:p-8">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
