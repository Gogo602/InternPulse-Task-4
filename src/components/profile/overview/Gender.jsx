import React from 'react';

// Define colors based on the design
const DARK_PURPLE = '#6E39CB'; // For the "Men" section
const LIGHT_PURPLE = '#cba3ff'; // For the "Women" section
const INDICATOR_COLOR = DARK_PURPLE; // Color of the circular indicator

/**
 * Helper function to calculate SVG arc path data.
 * This function generates the 'd' attribute for an SVG <path> element
 * to draw an arc.
 *
 * @param {number} cx - Center X coordinate of the circle from which the arc is drawn.
 * @param {number} cy - Center Y coordinate of the circle from which the arc is drawn.
 * @param {number} r - Radius of the arc.
 * @param {number} startAngle - Start angle in degrees (0 = right, 90 = bottom, 180 = left, etc.).
 * @param {number} endAngle - End angle in degrees.
 * @returns {string} SVG path 'd' attribute value.
 */
const describeArc = (cx, cy, r, startAngle, endAngle) => {
  const toRadians = (angle) => angle * (Math.PI / 180);

  // Convert angles to radians and calculate start/end points on the circle
  const x1 = cx + r * Math.cos(toRadians(startAngle));
  const y1 = cy + r * Math.sin(toRadians(startAngle));
  const x2 = cx + r * Math.cos(toRadians(endAngle));
  const y2 = cy + r * Math.sin(toRadians(endAngle));

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  // Sweep flag is '1' for clockwise drawing (downwards arc)
  const sweepFlag = '1';

  // M (moveto) x1 y1 A (arcto) rx ry x-axis-rotation large-arc-flag sweep-flag x2 y2
  return [
    `M ${x1} ${y1}`,
    `A ${r} ${r} 0 ${largeArcFlag} ${sweepFlag} ${x2} ${y2}`,
  ].join(' ');
};

/**
 * Calculates the position of a point on an arc given its center, radius, and angle.
 * This is used for positioning the circular indicator.
 *
 * @param {number} cx - Center X coordinate.
 * @param {number} cy - Center Y coordinate.
 * @param {number} r - Radius of the arc.
 * @param {number} angle - Angle in degrees.
 * @returns {{x: number, y: number}} The x and y coordinates of the point on the arc.
 */
const getPointOnArc = (cx, cy, r, angle) => {
  const toRadians = (angle) => angle * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(toRadians(angle)),
    y: cy + r * Math.sin(toRadians(angle)),
  };
};

/**
 * The Gender React Component.
 * Displays a custom semi-circular gauge using SVG for gender distribution.
 */
function Gender() {
  // IMPORTANT CHANGE: Percentages are now for Women first, then Men
  const womenPercentage = 45; // Women's percentage comes first in the reversed order
  const menPercentage = 55;   // Men's percentage comes second

  // The total filled portion of the visual arc remains the sum
  const totalFilledPercentage = womenPercentage + menPercentage;

  // The visible gauge is a semi-circle, which spans 180 degrees.
  // For a downwards facing arc, we consider 0 degrees (right) to 180 degrees (left) as our range.
  const gaugeTotalAngle = 180;

  // SVG dimensions and properties for the gauge
  const svgWidth = 300; // Width of the SVG canvas
  const svgHeight = 150; // Height of the SVG canvas
  const radius = 120; // Radius of the semi-circular arc
  const strokeWidth = 30; // Thickness of the arc line

  // Calculate the center of the arc within the SVG viewbox.
  // effectiveCenterY is 0 to make the arc face downwards from the top.
  const centerX = svgWidth / 2;
  const effectiveCenterY = 0; // Places the center of the full circle at the top of the SVG

  // IMPORTANT CHANGE: Calculate end angle for the "Women" segment first (from 0 degrees clockwise)
  const womenEndAngle = (womenPercentage / 100) * gaugeTotalAngle;

  // IMPORTANT CHANGE: Calculate end angle for the "Men" segment (starting from womenEndAngle)
  const menEndAngle = (totalFilledPercentage / 100) * gaugeTotalAngle;

  // Generate SVG path data for each arc segment
  // IMPORTANT CHANGE: Women's arc starts at 0, Men's arc starts where Women's ends.
  const womenArcPath = describeArc(centerX, effectiveCenterY, radius, 0, womenEndAngle);
  const menArcPath = describeArc(centerX, effectiveCenterY, radius, womenEndAngle, menEndAngle);

  // Calculate the position of the indicator dot (at the junction of Women/Men segments)
  // IMPORTANT CHANGE: Indicator angle is at the end of the *first* segment (Women's).
  const indicatorAngle = womenEndAngle;
  const indicatorPos = getPointOnArc(centerX, effectiveCenterY, radius, indicatorAngle);

  return (
    <div className="flex flex-col bg-white p-5 rounded-xl w-[105%] md:w-[100%]">
      {/* Chart Header with Question Mark Icon */}
      <div className="w-full flex justify-between items-center mb-4 px-2">
        <h2 className="text-2xl font-bold text-gray-800">Gender</h2>
        {/* Question Mark Icon */}
        <div
          className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-bold cursor-help"
          title="Distribution of users by gender."
        >
          ?
        </div>
      </div>

      {/* Gauge Section (SVG) */}
      <div className="w-full flex justify-center items-center relative" style={{ height: svgHeight }}>
        <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
          {/* IMPORTANT CHANGE: Women's Arc (Light Purple) rendered first */}
          <path
            d={womenArcPath}
            fill="none"
            stroke={LIGHT_PURPLE} // Light purple for Women
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* IMPORTANT CHANGE: Men's Arc (Dark Purple) rendered second */}
          <path
            d={menArcPath}
            fill="none"
            stroke={DARK_PURPLE} // Dark purple for Men
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Indicator Circle */}
          <circle
            cx={indicatorPos.x}
            cy={indicatorPos.y}
            r={10} // Radius of the indicator dot
            fill={INDICATOR_COLOR} // Color of the indicator (still DARK_PURPLE)
            stroke="white" // White border for the indicator
            strokeWidth={3}
          />
        </svg>
      </div>

      {/* Percentage and Labels Section */}
      <div className="w-full flex justify-center items-center mt-4 space-x-12">
        {/* IMPORTANT CHANGE: Women's Label first */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1">
            <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: LIGHT_PURPLE }}></span>
            <span className="text-xl font-bold text-gray-800">{womenPercentage}%</span>
          </div>
          <span className="text-gray-600 text-sm">Women</span>
        </div>

        {/* IMPORTANT CHANGE: Men's Label second */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1">
            <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: DARK_PURPLE }}></span>
            <span className="text-xl font-bold text-gray-800">{menPercentage}%</span>
          </div>
          <span className="text-gray-600 text-sm">Men</span>
        </div>
      </div>
    </div>
  );
}

export default Gender;
