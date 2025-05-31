import Card from "./Card";
import { cardData } from "../../data";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function Cards() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center bg-white rounded-lg">
      {cardData.map((item) => (
        <Card
          key={item.id}
          {...item}
          icon={
            item.isPositive ? (
              <ArrowUp size={14} className="text-green-500" />
            ) : (
              <ArrowDown size={14} className="text-red-500" />
            )
          }
        />
      ))}
    </ul>
  );
}
