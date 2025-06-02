// import HomeIcon from "@mui/icons-material/Home";
// import FileOpenIcon from "@mui/icons-material/FileOpen";
// import AppsIcon from "@mui/icons-material/Apps";
// import StoreIcon from "@mui/icons-material/Store";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import { FaAppStoreIos, FaHome, FaOpencart, FaStore, FaUniversity } from "react-icons/fa";

export const SideBarData = [
  {
    title: "Home",
    icon: <FaHome />,
    children: [
      {
        title: "Dashboard",
        path: "/dashboard",
      },
      {
        title: "Analytics",
        path: "/analytics",
      },
    ]
  },
  {
    title: "Pages",
    icon: <FaOpencart />,
    children: [
      {
        title: "Profile",
        children: [
          {
            title: "Profile overview",
            path: "/profileoverview",
          },
          {
            title: "Teams",
            path: "/teams",
          },
          {
            title: "All Projects",
            path: "/allprojects",
          },
        ],
      },
      {
        title: "Users",
        children: [
          {
            title: "Reports",
            path: "/reports",
          },
          {
            title: "New user",
            path: "/new-user",
          },
        ],
      },
      {
        title: "Account",
        children: [
          {
            title: "Setting",
            path: "/setting",
          },
          {
            title: "Billing",
            path: "/billing",
          },
          {
            title: "Invoice",
            path: "/invoice",
          },
          {
            title: "Security",
            path: "/security",
          },
        ],
      },
      {
        title: "Projects",
        children: [
          {
            title: "General",
            path: "/general",
          },
          {
            title: "Timeline",
            path: "/timeline",
          },
          {
            title: "New Project",
            path: "/new-project",
          },
          {
            title: "Pricing page",
            path: "/pricing-page",
          },
          {
            title: "Charts",
            path: "/charts",
          },
          {
            title: "Notification",
            path: "/notification",
          },
          {
            title: "Chat",
            path: "/chat",
          },
        ],
      },
    ],
  },
  {
    title: "Applications",
    icon: <FaAppStoreIos />,
    children: [
      {
        title: "Kanban",
        path: "/kanban",
      },
      {
        title: "Wizard",
        path: "/wizard",
      },
      {
        title: "Data tables",
        path: "/data-tables",
      },
      {
        title: "Calendar",
        path: "/calendar",
      },
    ],
  },
  {
    title: "E-commerce",
    icon: <FaStore />,
    children: [
      {
        title: "Overview",
        path: "/overview",
      },
      {
        title: "Products",
        children: [
          {
            title: "New product",
            path: "/new-product",
          },
          {
            title: "Edit product",
            path: "/edit-product",
          },
          {
            title: "Product list",
            path: "/product-list",
          },
        ],
      },
      {
        title: "Chat",
        children: [
          {
            title: "Order list",
            path: "/order-list",
          },
          {
            title: "Order detail",
            path: "/order-detail",
          },
        ],
      },
    ],
  },
  {
    title: "Authentication",
    icon: <FaUniversity />,
    path: "/Authentication",
  },
];
