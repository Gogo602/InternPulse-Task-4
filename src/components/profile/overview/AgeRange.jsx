import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Define colors based on the design
const DARK_PURPLE = '#6E39CB'; // For Men's bars (and active filter)
const LIGHT_PURPLE = '#cba3ff'; // For Women's bars (and inactive filter)
const GRAY_TEXT = '#6b7280'; // For general text
const LIGHT_GRAY_BG = '#e5e7eb'; // For question mark background

// Sample data for the age range chart.
// In a real application, this would come from an API or prop.
const chartData = [
  { name: '13-17', men: 70, women: 40 },
  { name: '18-24', men: 35, women: 60 },
  { name: '25-34', men: 45, women: 75 },
  { name: '35-44', men: 60, women: 65 },
  { name: '45-54', men: 85, women: 70 },
  { name: '55-64', men: 15, women: 60 },
  { name: '65-74+', men: 40, women: 60 },
];

function AgeRange() {
  // State to manage the active filter: 'all', 'men', or 'women'
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="flex flex-col w-full">
      {/* Chart Header */}
      <div className="w-full flex justify-between items-center  px-2">
        <h2 className="text-2xl font-bold text-gray-800">Age range</h2>
        
        {/* Filter Options and Question Mark Icon */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2 text-lg font-semibold">
            <button
              onClick={() => setActiveFilter('all')}
              className={`focus:outline-none transition-colors duration-200 
                ${activeFilter === 'all' ? `text-[${DARK_PURPLE}]` : `text-[${LIGHT_PURPLE}]`}`}
              style={{ color: activeFilter === 'all' ? DARK_PURPLE : LIGHT_PURPLE }}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('men')}
              className={`focus:outline-none transition-colors duration-200 
                ${activeFilter === 'men' ? `text-[${DARK_PURPLE}]` : `text-[${LIGHT_PURPLE}]`}`}
              style={{ color: activeFilter === 'men' ? DARK_PURPLE : LIGHT_PURPLE }}
            >
              Men
            </button>
            <button
              onClick={() => setActiveFilter('women')}
              className={`focus:outline-none transition-colors duration-200 
                ${activeFilter === 'women' ? `text-[${DARK_PURPLE}]` : `text-[${LIGHT_PURPLE}]`}`}
              style={{ color: activeFilter === 'women' ? DARK_PURPLE : LIGHT_PURPLE }}
            >
              Women
            </button>
          </div>
          {/* Question Mark Icon */}
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold cursor-help`}
            style={{ backgroundColor: LIGHT_GRAY_BG, color: GRAY_TEXT }}
            title="Distribution of users by age and gender."
          >
            ?
          </div>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="w-full h-60"> {/* Set a fixed height for the chart container */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20, right: 20, left: 0, bottom: 5,
            }}
            barCategoryGap="20%" // Space between groups of bars
            barGap={2} // Space between bars within a group
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" /> {/* Only horizontal grid lines, light gray */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={{ left: 20, right: 20 }}
              style={{ fontSize: '0.875rem', fill: GRAY_TEXT }} // Tailwind text-sm text-gray-600
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}`} // Optional: format Y-axis ticks
              width={30} // Adjust YAxis width if labels are long
              style={{ fontSize: '0.875rem', fill: GRAY_TEXT }} // Tailwind text-sm text-gray-600
            />
            <Tooltip
              cursor={{ fill: 'rgba(0,0,0,0.05)' }} // Light background for tooltip hover
              labelStyle={{ color: DARK_PURPLE }}
              itemStyle={{ color: 'black' }}
            />
            {/* Conditional rendering of bars based on activeFilter state */}
            {(activeFilter === 'all' || activeFilter === 'men') && (
              <Bar dataKey="men" fill={DARK_PURPLE} radius={[5, 5, 0, 0]} /> // Rounded top corners
            )}
            {(activeFilter === 'all' || activeFilter === 'women') && (
              <Bar dataKey="women" fill={LIGHT_PURPLE} radius={[5, 5, 0, 0]} /> // Rounded top corners
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AgeRange;
