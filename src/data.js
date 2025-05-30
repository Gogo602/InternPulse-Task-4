import mobileIcon from "./assets/mobile.png";
import desktopIcon from "./assets/desktop.png";
import tabletIcon from "./assets/tablet.png";
import tvIcon from "./assets/tv.png";

export const cardData = [
  {
    id: "currency",
    description: "Available to withdraw",
    rate: 10.0,
    amount: 1567.99,
    greyText: "wed jul 20",
    isPositive: true,
  },
  {
    id: "revenue",
    description: "Today Revenue",
    rate: 3.0,
    amount: 2868.99,
    greyText: "143 Orders",
    isPositive: false,
  },
  {
    id: "visitors",
    description: "Today Sessions",
    rate: 3.2,
    amount: "156K",
    greyText: "32k Visitors",
    isPositive: true,
  },
  {
    id: "subscribers",
    description: "Subscribers",
    rate: 8.3,
    amount: 3422,
    greyText: "$32.48 Average Order",
    isPositive: true,
  },
];

export const deviceData = [
  {
    icon: mobileIcon,
    name: "Mobile",
    rate: "96.42",
  },
  {
    icon: desktopIcon,
    name: "Desktop",
    rate: "2.76",
  },
  {
    icon: tabletIcon,
    name: "Tablet",
    rate: "0.82",
  },
  {
    icon: tvIcon,
    name: "TV",
    rate: "12.3",
  },
];

export const countries = [
  {
    name: "Pakistan",
    percentage: 54,
    flagCode: "pk",
  },
  {
    name: "Germany",
    percentage: 32,
    flagCode: "de",
  },
  {
    name: "United State",
    percentage: 27,
    flagCode: "us",
  },
  {
    name: "Spain",
    percentage: 25,
    flagCode: "es",
  },
];
