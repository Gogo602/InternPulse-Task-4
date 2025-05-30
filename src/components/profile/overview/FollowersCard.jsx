import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Dot, // Make sure Dot is imported if used directly
  CartesianGrid
} from 'recharts';

/**
 * Maps an actual follower count to a "visual" Y-axis scale (0 to 3)
 * to achieve visually equal spacing for non-linear numerical ticks.
 *
 * @param {number} value - The actual follower count.
 * @returns {number} The mapped visual scale value.
 */
const mapFollowersToVisualScale = (value) => {
  // Define the numerical breakpoints for your desired visual segments
  const breakpoints = [0, 50000, 100000, 500000];
  // Define the corresponding visual positions on the Y-axis (0 to 3 for 4 segments)
  const visualSegments = [0, 1, 2, 3];

  if (value < breakpoints[0]) return visualSegments[0]; // Handle values below lowest breakpoint

  for (let i = 0; i < breakpoints.length - 1; i++) {
    if (value >= breakpoints[i] && value <= breakpoints[i + 1]) {
      const segmentRange = breakpoints[i + 1] - breakpoints[i];
      const segmentProgress = (value - breakpoints[i]) / segmentRange;
      const visualSegmentRange = visualSegments[i + 1] - visualSegments[i];
      return visualSegments[i] + (segmentProgress * visualSegmentRange);
    }
  }
  // For values exceeding the highest breakpoint (e.g., > 500k in this case).
  // We clamp them to the max visual point, but you might extend the scale
  // if you expect higher values.
  return visualSegments[visualSegments.length - 1];
};

// Mock data to replicate the chart's trend and values
// These values are the actual follower counts
const chartData = [
  { date: '25.02', income: 400000, outcome: 80000 },
  { date: '26.02', income: 80000, outcome: 120000 },
  { date: '27.02', income: 520000, outcome: 70000 }, // Adjusted income to be around 500k for peak, matches design
  { date: '28.02', income: 300000, outcome: 110000 },
  { date: '29.02', income: 70000, outcome: 60000 },
];

// TRANSFORMED DATA for Recharts to use the linear visual scale
// Each original income/outcome value is mapped to its corresponding visual scale value
const transformedChartData = chartData.map(item => ({
  ...item,
  incomeVisual: mapFollowersToVisualScale(item.income),
  outcomeVisual: mapFollowersToVisualScale(item.outcome),
}));

/**
 * Custom Y-Axis Tick Formatter.
 * Takes the internal visual scale value (0, 1, 2, 3) and returns the desired label (0, 50k, 100k, 500k).
 *
 * @param {number} visualValue - The internal numerical value from the YAxis domain.
 * @returns {string} The formatted label for the Y-axis tick.
 */
const formatYAxisTick = (visualValue) => {
  if (visualValue === 0) return '0';
  if (visualValue === 1) return '50k';
  if (visualValue === 2) return '100k';
  if (visualValue === 3) return '500k';
  return ''; // Should not be reached with correctly set ticks
};

/**
 * Helper function to format original numerical values for tooltips and display.
 * @param {number} value - The raw numerical value (e.g., 50000).
 * @returns {string} The formatted string (e.g., "50k").
 */
const formatOriginalValue = (value) => {
    if (value === 0) return '0';
    if (value >= 1000000) return `${(value / 1000000).toLocaleString()}M`;
    if (value >= 1000) return `${(value / 1000).toLocaleString()}k`;
    return value.toLocaleString();
};

/**
 * Custom Tooltip component for the Recharts LineChart.
 * Displays the original (untransformed) data values on hover.
 *
 * @param {object} props - Recharts Tooltip props (active, payload, label).
 * @returns {JSX.Element|null} The custom tooltip JSX or null.
 */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Find the original data item using the label (date) to get untransformed values
    const originalDataItem = chartData.find(item => item.date === label);

    if (!originalDataItem) return null; // Safety check if data item isn't found

    return (
      <div className="p-2 bg-white rounded-lg shadow-md border border-gray-200">
        <p className="text-sm font-semibold text-gray-700">{`Date: ${label}`}</p>
        {/* Map through payload to display each line's data */}
        {payload.map((entry, index) => {
          // Reconstruct the original dataKey name (e.g., 'incomeVisual' -> 'income')
          const originalDataKey = entry.dataKey.replace('Visual', '');
          const originalValue = originalDataItem[originalDataKey];

          if (originalValue !== undefined) {
             return (
              <p key={`item-${index}`} className="text-sm" style={{ color: entry.stroke }}>
                {/* Use the 'name' prop from Line component for display (e.g., "Income") */}
                {`${entry.name}: ${formatOriginalValue(originalValue)}`}
              </p>
            );
          }
          return null;
        })}
      </div>
    );
  }
  return null;
};

/**
 * Custom Dot component for the specific static highlight at '27.02' on the Income line.
 * This will always render at that specific point, regardless of hover.
 *
 * @param {object} props - Recharts Dot props (cx, cy, stroke, payload, dataKey).
 * @returns {JSX.Element|null} The custom dot JSX or null.
 */
const CustomStaticHighlightDot = (props) => {
  const { cx, cy, stroke, payload, dataKey } = props;
  // Check if this is the specific point we want to highlight
  if (payload.date === '27.02' && dataKey === 'incomeVisual') {
    return (
      <Dot
        cx={cx}
        cy={cy}
        r={6} // Larger radius for highlight
        fill="white" // White fill as per design
        stroke="#ef4444" // Red border for income line, matching the line's color
        strokeWidth={2}
      />
    );
  }
  return null; // Don't render a dot for other points or other lines
};

/**
 * The main FollowersCard React Component.
 * Displays a line chart for "Followers" data using Recharts and Tailwind CSS.
 */
function FollowersCard() {
  return (
    <div className="flex flex-col w-full   bg-white">
      {/* Chart Header with Custom Legend */}
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <h2 className="text-xl font-bold text-gray-800">Followers</h2>
        {/* Custom Legend for precise positioning and styling */}
        <div className="flex items-center space-x-5 text-base font-medium">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span> {/* Red dot */}
            <span className="text-gray-700">Income</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-purple-600 mr-2"></span> {/* Purple dot */}
            <span className="text-gray-700">Outcome</span>
          </div>
        </div>
      </div>

      {/* Solid separator line under the header/legend area */}
      <div className="w-full border-b border-gray-200 mb-6"></div>

      {/* Chart Section */}
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={transformedChartData} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
            {/* Horizontal grid lines */}
            <CartesianGrid vertical={false} stroke="#E5E7EB" />

            {/* X-Axis for Dates */}
            <XAxis
              dataKey="date"
              tickLine={false} // Hide tick lines
              axisLine={false} // Hide axis line
              padding={{ left: 20, right: 20 }} // Add padding to start/end ticks
              tick={{ fill: '#6B7280', fontSize: 12 }} // Style for tick labels
              interval="preserveStartEnd" // Ensures all ticks are displayed
            />

            {/* Y-Axis for Follower Counts (visually equalized) */}
            <YAxis
              tickFormatter={formatYAxisTick} // Use custom formatter for 'k' suffix and equal spacing
              domain={[0, 3]} // Set domain to our visual scale (0 to 3)
              ticks={[0, 1, 2, 3]} // Set ticks to our visual scale for equal spacing
              tickLine={false} // Hide tick lines
              axisLine={false} // Hide axis line
              tick={{ fill: '#6B7280', fontSize: 13 }} // Style for tick labels
              width={50} // Allocate more width for Y-axis labels
            />

            {/* Tooltip for hover information */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ strokeDasharray: '3 3', stroke: '#A0A0A0' }} // Dashed grey line for tooltip cursor
            />

            {/* ReferenceLine for the static vertical dashed line at '27.02' */}
            <ReferenceLine x="27.02" stroke="#A0A0A0" strokeDasharray="3 3" />

            {/* Income Line */}
            <Line
              type="natural" // For a natural, wavy curve
              dataKey="incomeVisual" // Use the transformed data for plotting
              name="Income" // Name to be displayed in the tooltip
              stroke="#EF4444" // Red color
              strokeWidth={3} // Thicker line
              dot={<CustomStaticHighlightDot dataKey="incomeVisual" />} // Use custom dot for the specific highlight
              activeDot={{ r: 5, fill: '#EF4444', stroke: '#EF4444', strokeWidth: 1 }} // Smaller dot on hover for other income points
            />

            {/* Outcome Line */}
            <Line
              type="natural" // For a natural, wavy curve
              dataKey="outcomeVisual" // Use the transformed data for plotting
              name="Outcome" // Name to be displayed in the tooltip
              stroke="#8B5CF6" // Purple color
              strokeWidth={3}
              dot={false} // No static dots for the outcome line
              activeDot={{ r: 5, fill: '#8B5CF6', stroke: '#8B5CF6', strokeWidth: 1 }} // Smaller dot on hover for outcome points
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FollowersCard;