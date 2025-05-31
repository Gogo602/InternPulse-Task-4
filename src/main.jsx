import { createBrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <App />
  </createBrowserRouter>,
)
