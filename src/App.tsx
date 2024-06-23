import { useRoutes, BrowserRouter } from "react-router-dom";
// pages
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Products from "@Pages/Products";
import ProductsForm from "@Pages/Products/ProductForm";
import Doctors from "@Pages/Doctors";
import DoctorsForm from "@Pages/Doctors/DoctorForm";
import Cotizacion from "@Pages/Cotizacion";
import UsersPage from "@Pages/Users";
// profile pages
import MyProfile from "@Pages/MyProfile";
import ChangePassword from "@Pages/ChangePassword";
// hoks
// constants
import { URLS } from "./Constants/url";

//store
function AppRoutes() {
  // const Routes: RouteObject;
  const AppRoutes = useRoutes([
    {
      path: URLS.URL_LOGIN,
      element: <Login />,
    },
    {
      path: URLS.URL_HOME,
      element: <Home />,
    },
    // productos
    {
      path: URLS.URL_PRODUCTS,
      element: <Products />,
    },
    {
      path: URLS.URL_PRODUCTS_FORM,
      element: <ProductsForm />,
    },
    {
      path: URLS.URL_DOCTORS,
      element: <Doctors />,
    },
    {
      path: URLS.URL_DOCTORS_FORM,
      element: <DoctorsForm />,
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
