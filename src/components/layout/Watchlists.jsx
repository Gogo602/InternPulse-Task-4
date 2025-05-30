import GraphUi from "../ui/GraphUi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "May 5", green: 200, yellow: 150 },
  { date: "May 6", green: 180, yellow: 130 },
  { date: "May 7", green: 210, yellow: 100 },
  { date: "May 8", green: 260, yellow: 180 },
  { date: "May 9", green: 340, yellow: 220 }, 
  { date: "May 10", green: 320, yellow: 240 },
  { date: "May 11", green: 280, yellow: 190 },
  { date: "May 12", green: 220, yellow: 120 },
  { date: "May 13", green: 180, yellow: 90 },
  { date: "May 14", green: 170, yellow: 100 },
  { date: "May 15", green: 160, yellow: 90 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#10B981] text-white px-3 py-1 rounded text-sm shadow-md">
        {Number(payload[0].value).toLocaleString()}
      </div>
    );
  }
  return null;
};

export default function Watchlists() {
  return (
    <GraphUi
      name="Watchlists"
      time="This Month"
      className="col-span-2 shadow-sm"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#e7e7f4" vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            // domain={[20000, 100000]}
            ticks={[0, 100, 200, 300, 400]}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            name="Active"
            type="monotone"
            dataKey="green"
            stroke="#10B981"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              stroke: "#10B981",
              strokeWidth: 2,
              fill: "white",
            }}
          />
          <Line
            name="New"
            type="monotone"
            dataKey="yellow"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 6,
              stroke: "#F59E0B",
              strokeWidth: 2,
              fill: "white",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </GraphUi>
  );
}
