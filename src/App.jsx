import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Login from './frontPage/Login'
import SignUp from './frontPage/SignUp'
import Dashboard from './components/Dashboard'


const App = () => {
    const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;