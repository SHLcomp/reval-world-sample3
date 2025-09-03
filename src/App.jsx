import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/reval-world-sample3/",
    element: <Home />,
    errorElement: <h1>Sorry, 404</h1>
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
