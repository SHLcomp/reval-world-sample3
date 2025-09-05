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
    path: "/reval-world-sample3/",
    element: <Home />,
    errorElement: <h1>Sorry, 404</h1>,
  },
  {
    path: "/reval-world-sample3/epd",
    element: <Epd />,
  },
  {
    path: "/reval-world-sample3/upvc",
    element: <Upvc />,
  },
  {
    path: "/reval-world-sample3/services",
    element: <Services />,
  },
  {
    path: "/reval-world-sample3/product/",
    element: <ProductFilter />,
    children: [
      {
        path: ":productId",
        element: <ProductFilter />,
      },
    ],
  },
  {
    path:'/reval-world-sample3/product/door',
    element: <AllCat cat="door"/>
  },
  {
    path:'/reval-world-sample3/product/window',
    element: <AllCat cat="window"/>
  },
  {
    path: "/reval-world-sample3/allproducts",
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
