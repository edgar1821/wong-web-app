import { useRoutes, BrowserRouter } from "react-router-dom";
// pages
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Products from "@Pages/Products";
import Doctors from "@Pages/Doctors";
import Cotizacion from "@Pages/Cotizacion";
import UsersPage from "@Pages/Users";
// profile pages
import MyProfile from "@Pages/MyProfile";
import ChangePassword from "@Pages/ChangePassword";
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
    {
      path: Url.URL_COTIZACION,
      element: <Cotizacion />,
    },
    {
      path: Url.URL_USERS,
      element: <UsersPage />,
    },

    //profile pages
    {
      path: Url.URL_MY_PROFILE,
      element: <MyProfile />,
    },
    {
      path: Url.URL_CHANGE_PASSWORD,
      element: <ChangePassword />,
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
