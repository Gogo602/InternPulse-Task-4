// src/components/EarningItemCard.jsx

import React from 'react';
// Assuming you have an icon component or are using Heroicons/React Icons
// import { DocumentIcon } from '@heroicons/react/24/solid'; // Example from Heroicons

function EarningItemCard({ title, items, bgColor = "bg-white" }) {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${bgColor}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>

      {/* List of earning items */}
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between py-3 border-b last:border-b-0 border-gray-200">
            <div className="flex items-center space-x-3">
              {/* Placeholder for icon. In a real app, you'd use a prop or map item.type to a specific icon */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                {/* <DocumentIcon className="h-5 w-5" /> */}
                {/* Simple SVG placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
                <p className="text-xs text-gray-500">{item.type}</p>
              </div>
            </div>
            {/* Arrow icon (you'd use an SVG or icon library) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EarningItemCard;