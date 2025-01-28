import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Products from "./Products";
import App from "../App";
import Product from "./Product";
import ProductDetailsSkeleton from "../components/productDetailsSkeleton";
import HomePage from "./Homepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <Products /> },
      { path: "/product-details/:id", element: <Product /> },
    ],
  },
]);

export default router;
