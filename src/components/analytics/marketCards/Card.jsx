
export default function Card({ id, description, rate, amount, greyText, icon }) {
  const normalFormatter = Intl.NumberFormat("en-US");

  const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  const percentFormatter = Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
  });

  function numberFormatter(amount) {
    const formattedNum =
      id === "currency" || id === "revenue"
        ? currencyFormatter.format(amount)
        : id === "subscribers"
        ? normalFormatter.format(amount)
        : amount;
    return formattedNum;
  }

  function formatPercent(rate) {
    const formattedRate= percentFormatter.format(rate/100)
    return formattedRate;
  }

  return (
    <li className="p-4 space-y-[15px] w-[100%]">
      <div className="flex justify-between items-start gap-3.25">
        <h6 className="font-medium text-base">{description}</h6>
        <div className="flex gap-1.25 justify-center items-center bg-slate-100 p-[5px] h-[25px] text-[12.64px] text-[#6E39CB] rounded-lg">
          <span>{icon}</span>
          <p>{formatPercent(rate)}</p>
        </div>
      </div>

      <h1 className="text-[#6E39CB] text-[1.75rem]">{numberFormatter(amount)}</h1>
      <p className="font-normal text-[0.889rem] text-zinc-500">{greyText}</p>
    </li>
  );
}

// Import your icons as images. 
