import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-purple-600">Dashboard</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search anything here..."
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {/* Search icon - you'd use an SVG or an icon library here */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>
    </header>
  );
}
export default Header;