function StatsCard({ title, value, description, chartType, chartData, bgColor = "bg-white", textColor = "text-gray-800" }) {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${bgColor}`}>
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <p className={`text-3xl font-semibold ${textColor}`}>{value}</p>
      {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}

      {/* Conditional rendering for chart */}
      {chartType && chartData && (
        <div className="mt-4 h-20">
          {/* You'd integrate a charting library here, e.g., Recharts or Chart.js */}
          {/* For a simple line chart, you could use a very basic SVG or a pre-built component */}
          {/* Example: A simple SVG line for placeholder */}
          <svg viewBox="0 0 100 20" className="w-full h-full text-purple-500">
            <polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,15 10,10 20,13 30,8 40,12 50,7 60,10 70,5 80,8 90,3 100,6" />
          </svg>
        </div>
      )}
    </div>
  );
}
export default StatsCard;