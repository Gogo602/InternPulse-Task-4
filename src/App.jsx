import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProfileOverview from './components/profile/overview/ProfileOverview'
import Teams from './components/profile/teams/Teams'
import AllProjects from './components/profile/allProjects/AllProjects'


function App() {

  return (
    <div className='min-h-screen bg-black/10'>
      <Routes>
        <Route path='/' element={<ProfileOverview />}/>
        <Route path='/teams' element={<Teams />}/>
        <Route path='/allprojects' element={<AllProjects />}/>
      </Routes>
    </div>
  )
}

export default App
