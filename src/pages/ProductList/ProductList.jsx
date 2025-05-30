import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./ProductList.module.css";
import StatusBadge from "../../components/StatusBadge";

const initialProducts = [
  {
    id: 1,
    name: "BKLG0 Hoodie",
    category: "Clothing",
    quantity: 12,
    sku: "243598234",
    salary: "$170,750",
    status: "In Stock",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "MacBook Pro",
    category: "Electronics",
    quantity: 63,
    sku: "877712",
    salary: "$433,060",
    status: "Out of Stock",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Metro Bar Stool",
    category: "Furniture",
    quantity: 86,
    sku: "0134729",
    salary: "$320,800",
    status: "Out of Stock",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 4,
    name: "Alchimia Chair",
    category: "Furniture",
    quantity: 22,
    sku: "113213",
    salary: "$170,750",
    status: "In Stock",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 5,
    name: "Fendi Gradient Coat",
    category: "Clothing",
    quantity: 31,
    sku: "634729",
    salary: "$86,000",
    status: "Out of Stock",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    name: "Off White Cotton",
    category: "Clothing",
    quantity: 23,
    sku: "634729",
    salary: "$433,060",
    status: "In Stock",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    id: 7,
    name: "Y-3 Yohji Yamamoto",
    category: "Shoes",
    quantity: 31,
    sku: "634729",
    salary: "$162,700",
    status: "In Stock",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 8,
    name: "Fendi Gradient Coat",
    category: "Clothing",
    quantity: 34,
    sku: "113213",
    salary: "$372,000",
    status: "Out of Stock",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 9,
    name: "Metro Bar Stool",
    category: "Furniture",
    quantity: 59,
    sku: "877712",
    salary: "$137,500",
    status: "In Stock",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    id: 10,
    name: "MacBook Pro",
    category: "Electronics",
    quantity: 34,
    sku: "0134729",
    salary: "$327,900",
    status: "Out of Stock",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 11,
    name: "BKLG0 Hoodie",
    category: "Clothing",
    quantity: 41,
    sku: "877712",
    salary: "$205,500",
    status: "Out of Stock",
    avatar: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    id: 12,
    name: "Alchimia Chair",
    category: "Furniture",
    quantity: 21,
    sku: "634729",
    salary: "$103,600",
    status: "In Stock",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
  },
];

export default function ProductList() {
  const { search } = useOutletContext();

  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Sku</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className={styles.productCell}>
                  <img src={product.avatar} alt={product.name} className={styles.avatar} />
                  {product.name}
                </td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>{product.sku}</td>
                <td>{product.salary}</td>
                <td>
                  <StatusBadge status={product.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}