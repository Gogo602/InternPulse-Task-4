import GraphUi from "../ui/GraphUi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: 10, value: 40000 },
  { day: 11, value: 40000 },
  { day: 12, value: 60000 },
  { day: 13, value: 50000 },
  { day: 14, value: 60000 },
  { day: 15, value: 65000 },
  { day: 16, value: 80000 },
  { day: 17, value: 45000 },
  { day: 18, value: 50000 },
  { day: 19, value: 70000 },
  { day: 20, value: 65000 },
  { day: 21, value: 60000 },
  { day: 22, value: 50000 },
  { day: 23, value: 60000 },
  { day: 24, value: 55000 },
  { day: 25, value: 60000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm shadow-md">
        {Number(payload[0].value).toLocaleString()}
      </div>
    );
  }
  return null;
};

export default function SalesFunnel() {
  return (
    <GraphUi name="Sales Funnel" time="This Month" className="col-span-2 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[20000, 100000]}
            ticks={[40000, 60000, 80000, 100000]}
            tickFormatter={(value) => `${value / 1000}k`}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
          />
          <Tooltip
            formatter={(value) => value.toLocaleString()}
            content={<CustomTooltip />}
          />
          <Area
            type="linear"
            dataKey="value"
            stroke="#6E39CB"
            fill="url(#colorUv)"
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6E39CB" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#6E39CB" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </GraphUi>
  );
}
