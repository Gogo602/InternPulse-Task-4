import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the chart. In a real application, this would come from an API.
const chartData = [
  { name: 'Day 1', likes: 500 },
  { name: 'Day 2', likes: 560 },
  { name: 'Day 3', likes: 540 },
  { name: 'Day 4', likes: 800 },
  { name: 'Day 5', likes: 520 },
  { name: 'Day 6', likes: 935 },
  { name: 'Day 7', likes: 580 },
  { name: 'Day 8', likes: 580 },
  { name: 'Day 9', likes: 580 },
];

// Custom Tooltip for the Recharts LineChart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-lg shadow-md border border-gray-200">
        <p className="text-sm font-semibold text-gray-700">{`${label}`}</p>
        <p className="text-sm text-purple-600">{`Likes: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

function Card({chartColor, name, averageLikes, percentageChange, isPositiveChange}) {
  // Main metric and percentage change, could be dynamic from props or state
  // const averageLikes = 635;
  // const percentageChange = "+21.01%";
  // const isPositiveChange = percentageChange.startsWith('+');

  return (
    <div className="
      bg-white rounded-md shadow-lg px-4 flex items-center justify-between
      max-w-md w-full mx-auto
      font-inter
    ">
      {/* Chart Section */}
      <div className="w-full md:w-1/2 h-40 md:h-full pr-0 md:pr-4 md:mb-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" hide={true} /> {/* Hide X-axis labels for a cleaner look */}
            <YAxis hide={true} domain={['dataMin - 100', 'dataMax + 100']} /> {/* Hide Y-axis labels */}
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="likes"
              stroke={chartColor} // Purple color for the line
              strokeWidth={2}
              dot={false} // Hide dots on the line
              activeDot={{ r: 6, fill: '#8B5CF6', stroke: '#8B5CF6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Metrics Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-8">
        <div className="flex items-center text-gray-800 text-3xl font-bold mb-1">
            {averageLikes}
            <div className={`
                text-sm font-semibold ml-2
                ${isPositiveChange ? ' text-green-600' : ' text-red-600'}
                `}>
                {percentageChange}
            </div>
        </div>
        <div className="text-gray-800 mb-2 font-bold text-sm">
          {name}
        </div>
        
      </div>
    </div>
  );
}

export default Card;
