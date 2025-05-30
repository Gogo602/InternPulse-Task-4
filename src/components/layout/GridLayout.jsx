import SalesFunnel from "./SalesFunnel";
import Device from "./Device";
import Watchlists from "./Watchlists";
import Countries from "./Countries";

export default function GridLayout() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5 mt-7.5">
            <SalesFunnel />
            <Device />
            <Watchlists />
            <Countries />
        </div>
    );
}