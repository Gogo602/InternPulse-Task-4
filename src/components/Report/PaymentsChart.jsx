import React, { useState } from "react";
import { summary } from "../../FakeData";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PaymentsChart() {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const [selectedMonth, setSelectedMonth] = useState("january");

  // Update month on select change
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const paymentsForMonth = summary[0].payments[selectedMonth] || [];

  // Prepare data for Chart.js
  const data = {
    labels: paymentsForMonth.map((p) => {
      return p.day;
    }),
    datasets: [
      {
        label: "Monthly Stat",
        data: paymentsForMonth.map((p) => p.value), // values
        backgroundColor: "#D3BBFE",
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 16,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: true },
      },
      y: {
        grid: { display: false },
        ticks: { display: true },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-between mb-3">
        <div>
          <span className="text-[#89868D] text-lg font-medium">Statistic</span>
          <h2 className="text-black text-lg font-bold">Sales Closed</h2>
        </div>
        <div>
          <select
            className="border p-1 rounded"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-xl h-60 w-full relative bg-white p-2">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
