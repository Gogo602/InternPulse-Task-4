import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  // Dot // Not needed if not using custom dots for specific points
} from 'recharts';

// Mock data for the Interaction chart
const interactionChartData = [
  { date: '25.02', countA: 0, countB: 50 },
  { date: '26.02', countA: 200, countB: 150 }, // Max values are around 250
  { date: '27.02', countA: 70, countB: 80 },
  { date: '28.02', countA: 120, countB: 40 },
  { date: '29.02', countA: 15, countB: 0 },
];

/**
 * Custom Tooltip component for the Recharts LineChart.
 * Displays the actual numerical values without 'k' or 'M' suffix.
 *
 * @param {object} props - Recharts Tooltip props (active, payload, label).
 * @returns {JSX.Element|null} The custom tooltip JSX or null.
 */
const CustomInteractionTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-lg shadow-md border border-gray-200">
        <p className="text-sm font-semibold text-gray-700">{`Date: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} className="text-sm" style={{ color: entry.stroke }}>
            {/* Use entry.name for legend name and entry.value for the number */}
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

/**
 * The InteractionChart React Component.
 * Displays a line chart for "Interaction" data using Recharts and Tailwind CSS.
 */
function InteractionChart() {
  return (
    <div className="flex flex-col w-full max-w-lg  bg-white">
      {/* Chart Header with Question Mark Icon */}
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-bold text-gray-800">Interaction</h2>
        {/* Question Mark Icon */}
        <div
          className="w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-gray-50 text-sm font-bold cursor-help"
          title="Interaction data represents user engagements over time." // Basic tooltip for the icon
        >
          ?
        </div>
      </div>

      {/* Solid separator line under the header */}
      <div className="w-full border-b border-gray-200 mb-6"></div>

      {/* Chart Section */}
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={interactionChartData} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
            {/* Horizontal grid lines */}
            <CartesianGrid vertical={false} stroke="#E5E7EB" />

            {/* X-Axis for Dates */}
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              padding={{ left: 20, right: 20 }}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              interval="preserveStartEnd"
            />

            {/* Y-Axis for Interaction Counts */}
            <YAxis
              domain={[0, 250]} // Set domain to cover 0 to 250
              ticks={[0, 50, 150, 250]} // Specific ticks as per design
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#6B7280', fontSize: 13 }}
              width={50} // Allocate more width for Y-axis labels
            />

            {/* Tooltip for hover information */}
            <Tooltip
              content={<CustomInteractionTooltip />}
              cursor={{ strokeDasharray: '3 3', stroke: '#A0A0A0' }} // Dashed grey line for tooltip cursor
            />

            {/* Line for countA (Red Dashed) */}
            <Line
              type="natural" // For a natural, wavy curve
              dataKey="countA" // Data key for this line
              name="Line A" // Name for tooltip, you might replace with "Income" or "Interactions"
              stroke="#EF4444" // Red color
              strokeWidth={2}
              strokeDasharray="5 5" // Makes the line dashed
              dot={false} // No static dots
              activeDot={{ r: 5, fill: '#EF4444', stroke: '#EF4444', strokeWidth: 1 }} // Smaller dot on hover
            />

            {/* Line for countB (Blue Dashed) */}
            <Line
              type="natural" // For a natural, wavy curve
              dataKey="countB" // Data key for this line
              name="Line B" // Name for tooltip, you might replace with "Outcome" or "Views"
              stroke="#6E39CB" // The specific dark purple/blue from the design
              strokeWidth={2}
              strokeDasharray="5 5" // Makes the line dashed
              dot={false} // No static dots
              activeDot={{ r: 5, fill: '#6E39CB', stroke: '#6E39CB', strokeWidth: 1 }} // Smaller dot on hover
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default InteractionChart;