import Cards from "./marketCards/Cards";
import GridLayout from "./layout/GridLayout";
import { Search } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="bg-slate-100 p-7.5 max-w-[1400px] mx-auto">
      <header className="flex gap-25 items-center mb-6">
        <h1 className="text-2xl font-semibold text-purple-600">Analytics</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything here..."
            className="bg-white pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300 w-64"
          />
          <Search
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>
      </header>

      <section>
        <Cards />
        <GridLayout />
      </section>
    </div>
  );
}
