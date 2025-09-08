import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./Component/Home";

import "./App.css";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import Cursor from "./Component/Cursor";
import Footer from "./Component/Footer";
import Top from "./Component/Top";
import ErrorPage from "./Component/ErrorPage";
import Cart from "./Component/Cart";
import Shippingcard from "./Component/Shippingcard";
import Login from "./Component/Login";

const Layout = () => {
  return (
    <>
      <div>
        <Cursor />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/products",
        element: <Top />,
      },
      {
        path: "/Cart/:id",
        element: <Cart />,
      },
      {
        path: "/shipping",
        element: <Shippingcard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div>
        <div>
          <RouterProvider router={router} />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
