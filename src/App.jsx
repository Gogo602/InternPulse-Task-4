import {
  Route,
  Routes
} from 'react-router-dom'
import SignUp from './components/frontPage/SignUp'
import Login from './components/frontPage/Login'
import Forgot from './components/frontPage/forgot'
import Dashboard from './components/dashboard/Dashboard'
import SideBar from './components/scrollBar/SideBar'
import AnalyticsPage from './components/analytics/AnalyticsPage';
import ProfileOverview from './components/profile/overview/ProfileOverview'
import Teams from './components/profile/teams/Teams'
import AllProjects from './components/profile/allProjects/AllProjects';
import Reports from './components/Report/Reports'
import Users from './components/Users/Users'
import Billing from './components/settings/Billing'
import Invoice from './components/settings/Invoice'
import Security from './components/settings/Security'
import Setting from './components/settings/Setting'
import NewProject from './projecttimeline/newproject';
import TimeLine from './projecttimeline/timeline';
import { PricingPage } from './Moses\'s-components/PricingPage';
import { DataTables } from './Moses\'s-components/DataTables';
import Calendar from './Moses\'s-components/Calendar';
import Chats from './components/chat-chart-notifications/pages/Chat';
import Notification from './components/chat-chart-notifications/pages/Notification';
import Newproduct from './components/Products/Newproduct/Newproduct'
import Editproduct from './components/Products/Editproduct/Editproduct'
import Media from './components/Products/Newproduct/Media';
import ProductInfo from './components/Products/Newproduct/ProductInfo';
import Social from './components/Products/Newproduct/Social';
import Pricing from './components/Products/Newproduct/Pricing';
import ProductListPage from './pages/ProductList/ProductListPage';
import OrderListPage from './pages/OrderList/OrderListPage';
import OrderDetailsPage from "./pages/OrderDetails/OrderDetailsPage";
// import Chart from './components/chat-chart-notifications/pages/Chart'




const App = () => {
  return (
    <div className='flex items-center'>
      <div className='fixed min-h-screen top-0  left-0'>
        <SideBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Users" element={<Users />} />
          <Route path='/authentication' element={<SignUp />} />
          <Route path='/Signin' element={<Login />} />
          <Route path='/forgot-password' element={<Forgot/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/profileoverview' element={<ProfileOverview/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/allprojects' element={<AllProjects />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/new-user" element={<Users />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/security" element={<Security />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/pricing-page" element={<PricingPage />} />
          <Route path="/data-tables" element={<DataTables />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/Chat" element={<Chats />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/new-product" element={<Newproduct />} >
            <Route path='media' element={<Media />}/>
            <Route path='product' element={<ProductInfo />}/>
            <Route path='social' element={<Social />}/>
            <Route path='pricing' element={<Pricing />}/>
            <Route />
          </Route>
          <Route path="/edit-product" element={<Editproduct />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path='/order-list' element={<OrderListPage/>}/>
          <Route path="/order-detail" element={<OrderDetailsPage />} />
          {/* <Route path="/charts" element={<Chart />} /> */}
        </Routes>
      </div>
    
  </div>
)

};

export default App;