import React, { useState } from "react";
import styles from "./OrderList.module.css";

// Helper for colored dot
function StatusDot({ color }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: "50%",
        marginRight: 8,
        backgroundColor: color || "#ccc",
      }}
    />
  );
}

// Mapping for revenue/status colors
const statusColors = {
  Paid: "#6d4afe",
  Canceled: "#fc3e3e",
  Refunded: "#2acfcf",
};

const orders = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David",
    email: "david@gmail.com",
    product: "BKLGQ Hoodie",
    id: "#10421",
    status: "Paid",
    revenue: "Paid",
    date: "12 Jan, 2023",
    statusNumber: "245398234",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Warner",
    email: "warner@gmail.com",
    product: "MacBook Pro",
    id: "#10422",
    status: "Canceled",
    revenue: "Canceled",
    date: "13 Jan, 2023",
    statusNumber: "877712",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Smith",
    email: "smith@gmail.com",
    product: "Metro Bar Stool",
    id: "#10423",
    status: "Refunded",
    revenue: "Refunded",
    date: "14 Jan, 2023",
    statusNumber: "0134729",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "Devo",
    email: "devo@gmail.com",
    product: "Alchimia Chair",
    id: "#10424",
    status: "Paid",
    revenue: "Paid",
    date: "15 Jan, 2023",
    statusNumber: "113213",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Victory",
    email: "victory@gmail.com",
    product: "Fendi Gradient Coat",
    id: "#10425",
    status: "Paid",
    revenue: "Paid",
    date: "16 Jan, 2023",
    statusNumber: "634729",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
    name: "Henry",
    email: "henry@gmail.com",
    product: "Off White Cotton",
    id: "#10426",
    status: "Canceled",
    revenue: "Canceled",
    date: "17 Jan, 2023",
    statusNumber: "634729",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    name: "Mark",
    email: "mark@gmail.com",
    product: "Y-3 Yohji Yamamoto",
    id: "#10427",
    status: "Refunded",
    revenue: "Refunded",
    date: "18 Jan, 2023",
    statusNumber: "634729",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    name: "Anderson",
    email: "anderson@gmail.com",
    product: "Fendi Gradient Coat",
    id: "#10428",
    status: "Refunded",
    revenue: "Refunded",
    date: "19 Jan, 2023",
    statusNumber: "113213",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    name: "John",
    email: "john@gmail.com",
    product: "Metro Bar Stool",
    id: "#10429",
    status: "Paid",
    revenue: "Paid",
    date: "20 Jan, 2023",
    statusNumber: "877712",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Duplesis",
    email: "duplesis@gmail.com",
    product: "MacBook Pro",
    id: "#10430",
    status: "Canceled",
    revenue: "Canceled",
    date: "21 Jan, 2023",
    statusNumber: "0134729",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    name: "Miz",
    email: "miz@gmail.com",
    product: "BKLGQ Hoodie",
    id: "#10431",
    status: "Canceled",
    revenue: "Canceled",
    date: "22 Jan, 2023",
    statusNumber: "877712",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    name: "Watson",
    email: "watson@gmail.com",
    product: "Alchimia Chair",
    id: "#10432",
    status: "Refunded",
    revenue: "Refunded",
    date: "23 Jan, 2023",
    statusNumber: "634729",
  },
];

export default function OrderList() {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) =>
    [
      order.name,
      order.email,
      order.product,
      order.id,
      order.status,
      order.revenue,
      order.date,
      order.statusNumber,
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className={styles.bg}>
      <div className={styles.header}>
        <h2 className={styles.title}>Order List</h2>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search anything here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableHead}>
          <div>Customer</div>
          <div>Product</div>
          <div>Id</div>
          <div>Status</div>
          <div>Revenue</div>
          <div>Date</div>
        </div>
        {filteredOrders.map((order, idx) => (
          <div className={styles.tableRow} key={idx}>
            <div className={styles.customerCell}>
              <img src={order.avatar} alt={order.name} className={styles.avatar} />
              <div>
                <div className={styles.customerName}>{order.name}</div>
                <div className={styles.customerEmail}>{order.email}</div>
              </div>
            </div>
            <div>{order.product}</div>
            <div>{order.id}</div>
            <div>{order.statusNumber}</div>
            <div className={styles.statusCell}>
              <StatusDot color={statusColors[order.revenue]} />
              {order.revenue}
            </div>
            <div>{order.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}