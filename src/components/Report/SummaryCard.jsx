import React from "react";
import { summary } from "../../FakeData";

export default function SummaryCard() {
  const data = summary[0].summaryData;

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 items-center justify-center gap-4  text-center">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`text-[#3A3541] border-0  flex flex-col items-center justify-center ${
            index !== data.length - 1 ? "lg:border-r-2 pe-4" : ""
          }`}
        >
          <h1 className="text-2xl font-bold">${item.value.toLocaleString()}</h1>
          <span className="text-[#89868D]">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
