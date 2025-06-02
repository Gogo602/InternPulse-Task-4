import React, { useState } from "react";
import { summary } from "../../FakeData";
import { Bar } from "react-chartjs-2";

export default function LoanIncomeChart() {
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

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-6  ">
      <IncomePayments months={months} />
      <LoanPayment months={months} />
    </div>
  );
}

function IncomePayments({ months }) {
  const [selectedPaymentMonth, setSelectedPaymentMonth] = useState("january");
  const [calculateTotalIncomePayment, setCalculateTotalIncomePayment] =
    useState("80,58,576");

  const paymentsForMonth = summary[0].payments[selectedPaymentMonth]
    ? summary[0].payments[selectedPaymentMonth]
    : [];

  const handleIncomePaymentMonthChange = (e) => {
    const month = e.target.value;
    setSelectedPaymentMonth(month);
    const totalPaymentIncome = paymentsForMonth
      .flatMap((p) => p.income)
      .reduce((acc, curr) => acc + curr, 0);
    setCalculateTotalIncomePayment(totalPaymentIncome);
  };

  const Incomedata = {
    labels: paymentsForMonth.map((p) => {
      return p.day;
    }),
    datasets: [
      {
        label: "",
        data: paymentsForMonth.map((p) => p.income),
        backgroundColor: "#6E39CB",
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 12,
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
    <div className="  p-8  bg-white shadow">
      <div className="flex justify-between">
        <div>
          <p className="text-[#89868D]">Payments</p>
          <h2 className="font-extrabold">
            ${calculateTotalIncomePayment.toLocaleString()}
          </h2>
        </div>
        <div>
          <select onChange={handleIncomePaymentMonthChange}>
            {months.map((month) => {
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="rounded-xl h-60 w-full relative bg-white p-4">
        <Bar options={options} data={Incomedata} />
      </div>
    </div>
  );
}

function LoanPayment({ months }) {
  const [selectedMonth, setSelectedMonth] = useState("january");
  const [calculateTotalLoanIncome, setCalculateTotalLoanIncome] =
    useState("78,600,89");
  const handleLoanMonthChange = (e) => {
    const month = e.target.value;
    setSelectedMonth(month);
    const totalLoanIncome = paymentsForMonth
      .flatMap((p) => p.loan)
      .reduce((acc, currr) => acc + currr, 0);

    setCalculateTotalLoanIncome(totalLoanIncome);
  };
  const paymentsForMonth = summary[0].payments[selectedMonth]
    ? summary[0].payments[selectedMonth]
    : " ";

  const LoanData = {
    labels: paymentsForMonth.map((p) => {
      return p.day;
    }),
    datasets: [
      {
        label: "",
        data: paymentsForMonth.map((p) => p.loan),
        backgroundColor: "#6E39CB",
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 11,
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
    <div>
      <div className="  p-8  bg-white shadow">
        <div className="flex justify-between">
          <div>
            <p className="text-[#89868D]">Loan Income</p>
            <h2 className="font-extrabold">
              ${calculateTotalLoanIncome.toLocaleString()}
            </h2>
          </div>
          <div>
            <select onChange={handleLoanMonthChange}>
              {months.map((month) => {
                return (
                  <option key={month} value={month}>
                    {month}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="rounded-xl h-60 w-full relative bg-white p-4">
          <Bar options={options} data={LoanData} />
        </div>
      </div>
    </div>
  );
}
