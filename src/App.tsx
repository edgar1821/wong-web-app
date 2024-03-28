import { useRoutes, BrowserRouter } from "react-router-dom";
// pages
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Products from "@Pages/Products";
import Doctors from "@Pages/Doctors";
// constants
import * as Url from "./Constants/url";
function AppRoutes() {
  const AppRoutes = useRoutes([
    {
      path: Url.URL_LOGIN,
      element: <Login />,
    },
    {
      path: Url.URL_HOME,
      element: <Home />,
    },
    {
      path: Url.URL_PRODUCTS,
      element: <Products />,
    },
    {
      path: Url.URL_DOCTORS,
      element: <Doctors />,
    },
  ]);
  return AppRoutes;
}
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
