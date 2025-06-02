import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import LoanIncomeChart from "./LoanIncomeChart";
import SummaryCard from "./SummaryCard";
import PaymentsChart from "./PaymentsChart";

export default function Reports() {
  return (
    <main className="p-6 mt-30  lg:mt-0 flex flex-col gap-6 overflow-auto lg:ml-[280px] ">
      <header className="h-20  flex items-center">
        <DashBoardHeader />
      </header>

      <section aria-label="Summary overview" className="space-y-6">
        <article
          aria-labelledby="summary-overview-title"
          className="bg-white rounded-lg p-8 shadow"
        >
          <SummaryCard />
        </article>

        <article
          aria-labelledby="payments-chart-title"
          className="h-[382px] bg-white p-8 rounded-lg shadow"
        >
          <h2 id="payments-chart-title" className="sr-only">
            Payments Chart
          </h2>
          <PaymentsChart />
        </article>

        <article
          aria-labelledby="loan-income-chart-title"
          className="p-8 rounded-lg"
        >
          <h2 id="loan-income-chart-title" className="sr-only">
            Loan Income Chart
          </h2>
          <LoanIncomeChart />
        </article>
      </section>
    </main>
  );
}
