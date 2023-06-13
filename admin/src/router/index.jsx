import { DashboardPage, MovieFormPage, LoginPage } from "../pages";
import Layout from "../components/Layout";
import { createBrowserRouter, redirect } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "movie/add",
        element: <MovieFormPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
