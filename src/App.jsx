import {
  Route,
  Routes
} from 'react-router-dom'
import SignUp from './components/frontPage/SignUp'
import Dashboard from './components/Dashboard'
import SideBar from './components/scrollBar/SideBar'
import AnalyticsPage from './components/analytics/AnalyticsPage';
import ProfileOverview from './components/profile/overview/ProfileOverview'
import Teams from './components/profile/teams/Teams'
import AllProjects from './components/profile/allProjects/AllProjects';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";



const App = () => {
  return (
    <div className='flex items-center'>
      <SideBar />
      <div>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/profileoverview' element={<ProfileOverview/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/allprojects' element={<AllProjects/>}/>
        </Routes>
      </div>
    
  </div>
)

};

export default App;