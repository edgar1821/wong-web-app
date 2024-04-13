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
import { URLS } from "./Constants/url";
function AppRoutes() {
  const AppRoutes = useRoutes([
    {
      path: URLS.URL_LOGIN,
      element: <Login />,
    },
    {
      path: URLS.URL_HOME,
      element: <Home />,
    },
    {
      path: URLS.URL_PRODUCTS,
      element: <Products />,
    },
    {
      path: URLS.URL_DOCTORS,
      element: <Doctors />,
    },
    {
      path: URLS.URL_COTIZACION,
      element: <Cotizacion />,
    },
    {
      path: URLS.URL_USERS,
      element: <UsersPage />,
    },

    //profile pages
    {
      path: URLS.URL_MY_PROFILE,
      element: <MyProfile />,
    },
    {
      path: URLS.URL_CHANGE_PASSWORD,
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
