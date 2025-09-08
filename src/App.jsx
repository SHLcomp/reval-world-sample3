import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Epd from "./pages/Epd.jsx";
import Upvc from "./pages/Upvc.jsx";
import Services from "./pages/Services.jsx";
import ProductFilter from "./componets/poductFilter/ProductFilter.jsx";
import { AllCat } from "./componets/allCat/AllCat.jsx";
import { AllProducts } from "./pages/AllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Sorry, 404</h1>,
  },
  {
    path: "/epd",
    element: <Epd />,
  },
  {
    path: "/upvc",
    element: <Upvc />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/product/",
    element: <ProductFilter />,
    children: [
      {
        path: ":productId",
        element: <ProductFilter />,
      },
    ],
  },
  {
    path:'/product/door',
    element: <AllCat cat="sliding systems"/>
  },
  {
    path:'/product/window',
    element: <AllCat cat="window"/>
  },
  {
    path: "/allproducts",
    element: <AllProducts />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
