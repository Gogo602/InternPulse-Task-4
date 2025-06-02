import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '10', sales: 20 }, { name: '20', sales: 25 }, { name: '30', sales: 35 },
  { name: '40', sales: 28 }, { name: '50', sales: 32 }, { name: '60', sales: 20 },
  { name: '70', sales: 15 }, { name: '80', sales: 18 }, { name: '90', sales: 12 },
  { name: '100', sales: 10 }, { name: '200', sales: 25 }, { name: '300', sales: 18 },
  { name: '400', sales: 10 }, { name: '500', sales: 5 },
];

function ChartCard({ title, chartType, chartData = data, bgColor = "bg-white" }) {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${bgColor} h-96`}> {/* Fixed height for charts */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="80%">
        {chartType === 'line' ? (
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} dot={false} />
          </LineChart>
        ) : (
          <img src="../assets/transaction graph.png" alt="" />
        )}
      </ResponsiveContainer>
    </div>
  );
}
export default ChartCard;