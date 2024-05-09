import React from "react";
import { useState } from "react";
// import Vote from "./Vote";
import OngoningElect from "./Ongoing";
import UpcomingElect from "./Upcoming";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="lg:mx-0 mx-4 mt-8">
        {/* <Vote /> */}
      <div className="flex justify-between items-center overflow-x-auto">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === 1 ? "text-green-500 border-b-4 border-green-500 border-3 font-bold" : "text-gray-400"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Ongoing elections
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === 2 ? "text-green-500 border-b-4 border-green-500 border-3 font-bold" : "text-gray-400"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Upcoming elections
        </button>
      </div>

      <div className="mt-4 overflow-x-auto">
        {activeTab === 1 && (
          <div>
            <OngoningElect />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <UpcomingElect />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;