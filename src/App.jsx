import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ProfileOverview from './components/profile/ProfileOverview'


function App() {

  return (
    <div className='min-h-screen bg-black/10'>
      <Header />
      <Routes>
        <Route path='/' element={<ProfileOverview />}/>
      </Routes>
    </div>
  )
}

export default App
