import {
  Route,
  Routes
} from 'react-router-dom'
import SignUp from './components/frontPage/SignUp'
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






const App = () => {
  return (
    <div className='flex items-center'>
      <SideBar />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Users" element={<Users />} />
          <Route path='/signup' element={<SignUp />} />
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
        </Routes>
      </div>
    
  </div>
)

};

export default App;