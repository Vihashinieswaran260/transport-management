import React, { useState } from 'react';

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <div>
      <div className="flex border-b mb-4">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mr-4 pb-2 ${activeTab === tab ? 'border-b-2 border-blue-600' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab]}</div>
    </div>
  );
};