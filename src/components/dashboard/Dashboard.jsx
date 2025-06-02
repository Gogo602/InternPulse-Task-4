import Header from '../Header';
import StatsCard from './StatsCard'; 
import ChartCard from './ChartCard';
import EarningItemCard from './EarningItemCard';
import ImpressionCard from './ImpressionCard'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


function App() {
  return (
    <div className="min-h-screen bg-gray-100 sm:ml-60 z-0 p-4 lg:p-8 "> {/* Increased padding for larger screens */}
      <Header
        name='Dashboard'
      />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Top Row */}
        <div className="lg:col-span-2 xl:col-span-3"> 
          <StatsCard
            title="Active users right now"
            value="300"
            description="Page views per minute"
            chartType="bar" // or bar  
            chartData={[ /* ... data for the small line chart */ ]}
            bgColor="bg-white" 
            textColor="text-purple-600"
          />
        </div>
        <div className="lg:col-span-1 xl:col-span-1"> {/* Your Earning */}
          <StatsCard
            title="Your earning this month"
            value="735.2$"
            description="Update your payout method in Setting"
            actionText="Withdraw All Earnings"
            bgColor="bg-white"
          />
        </div>

        {/* Second Row - Smaller Cards */}
        <StatsCard title="Users" value="35k" /* ... other props */ />
        <StatsCard title="Clicks" value="1m" /* ... other props */ />
        <StatsCard title="Sales" value="345$" /* ... other props */ />
        <StatsCard title="Items" value="68" /* ... other props */ />

        {/* Third Row - Charts */}
        <div className="lg:col-span-3"> {/* Sales by Age takes wider space */}
          <ChartCard
            title="Sales by Age"
            chartType="line"
            chartData={[ 
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]}


            bgColor="bg-white"
          />
        </div>
        <div className="lg:col-span-1"> {/* Earnings by Item */}
          <EarningItemCard
            title="Earnings by item"
            items={[
              { name: 'Bento 3D Kit', type: 'Illustration' },
              { name: 'Bento 3D Kit', type: 'Coded Template' },
              { name: 'Bento 3D Kit', type: 'Illustration' },
            ]}
            bgColor="bg-white"
          />
        </div>

        {/* Fourth Row - Impression Chart */}
        <div className="lg:col-span-1"> 
          <ImpressionCard/>
        </div>
      </main>
    </div>
  );
}
export default App;