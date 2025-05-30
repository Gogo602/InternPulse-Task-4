import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "./Layout.module.css";

export default function Layout() {
  const [search, setSearch] = useState("");
  const location = useLocation();

  // Optional: Change page title based on route
  let pageTitle = "Product Dashboard";
  if (location.pathname === "/" || location.pathname === "/products") {
    pageTitle = "Product List";
  }
  if (location.pathname === "/orders") {
    pageTitle = "Order List";
  }

  return (
    <div>
      <header className={styles.header}>
        <span className={styles.title}>{pageTitle}</span>
        <SearchBar
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search anything here..."
        />
      </header>
      <main className={styles.main}>
        {/* Pass search value to pages via context */}
        <Outlet context={{ search }} />
      </main>
    </div>
  );
}