import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Epd from './pages/Epd.jsx'
import Upvc from './pages/Upvc.jsx'

const router = createBrowserRouter([
  {
    path: "/reval-world-sample3/",
    element: <Home />,
    errorElement: <h1>Sorry, 404</h1>
  },
  {
    path: '/reval-world-sample3/epd',
    element: <Epd />
  },
  {
    path: '/reval-world-sample3/upvc',
    element: <Upvc />
  }
])


function App() {
  return(
  <div>
    <RouterProvider router = {router}/>
  </div>
  )
}

export default App
