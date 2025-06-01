import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  // YAxis, // Not explicitly visible in design
  // Tooltip, // Not visible in design
  // CartesianGrid, // Not visible in design
} from 'recharts';

// Mock data for the Best time chart
const bestTimeData = [
  { day: 'Mon', value: 200, isHighlighted: false },
  { day: 'Tue', value: 50, isHighlighted: false },
  { day: 'Wed', value: 120, isHighlighted: false },
  { day: 'Thu', value: 70, isHighlighted: false },
  { day: 'Fri', value: 250, isHighlighted: true }, // Highlighted bar
  { day: 'Sat', value: 60, isHighlighted: false },
  { day: 'Sun', value: 170, isHighlighted: false },
];

// Define colors based on the design
const LIGHT_PURPLE = '#cba3ff'; // Close to what's used for non-highlighted bars
const DARK_PURPLE = '#6E39CB';  // The specific darker purple for the highlighted bar

const CustomBar = (props) => {
  const { x, y, width, height, fill, payload } = props;
  const isHighlighted = payload.isHighlighted; // Access the isHighlighted property from data

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={isHighlighted ? DARK_PURPLE : LIGHT_PURPLE}
      // Apply border radius only to the top corners
      rx={5} // Horizontal radius
      ry={5} // Vertical radius
    />
  );
};


/**
 * The BestTimeChart React Component.
 * Displays a bar chart for "Best time" data using Recharts and Tailwind CSS.
 */
function BestTimeChart() {
  return (
    <div className="flex flex-col w-full"> {/* Dark background, white text */}
      {/* Chart Header */}
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-bold text-gray-900">Best time</h2> {/* Slightly lighter text for title */}
        {/* Days/Hours Toggles and Question Mark Icon */}
        <div className="flex items-center space-x-4 text-base font-medium">
          {/* Days Toggle */}
          <span className="text-purple-700 cursor-pointer">Days</span> {/* Highlighted "Days" */}
          {/* Hours Toggle */}
          <span className="text-purple-300 cursor-pointer">Hours</span> {/* Regular "Hours" */}
          {/* Question Mark Icon */}
          <div
            className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-gray-300 text-sm font-bold cursor-help"
            title="Represents optimal times based on data."
          >
            ?
          </div>
        </div>
      </div>

      {/* No separator line visible in this design */}
      {/* <div className="w-full border-b border-gray-200 mb-6"></div> */}

      {/* Chart Section */}
      <div className="w-full h-65">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={bestTimeData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}> {/* Reduced margins */}
            {/* No CartesianGrid needed */}

            {/* X-Axis for Days */}
            <XAxis
              dataKey="day"
              axisLine={false} // Hide axis line
              tickLine={false} // Hide tick lines
              tick={{ fill: '#c0c0c0', fontSize: 13 }} // Light grey tick labels
              interval={0} // Ensure all labels are shown
              // Adjust padding to make bars spread across the width
              padding={{ left: 20, right: 20 }}
            />

            {/* Y-Axis (Hidden as per design) */}
            {/* If you ever need it, uncomment YAxis and adjust its properties */}
            {/* <YAxis hide={true} /> */}

            {/* Bar component */}
            <Bar
              dataKey="value" // The value that determines bar height
              shape={<CustomBar />} // Use the custom bar component for conditional coloring and rounded tops
              barSize={30} // Adjust bar width
              // No `fill` here as it's handled by CustomBar
              // No Tooltip as per design (remove Recharts Tooltip component if used)
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BestTimeChart;