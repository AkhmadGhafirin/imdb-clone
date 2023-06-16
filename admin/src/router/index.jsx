import {
  DashboardPage,
  MovieFormPage,
  LoginPage,
  GenresPage,
  RegisterPage,
} from "../pages";
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
        path: "movies/add",
        element: <MovieFormPage />,
      },
      {
        path: "movies/edit/:id",
        element: <MovieFormPage />,
      },
      {
        path: "genres",
        element: <GenresPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
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
  {
    path: "*",
    element: (
      <>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="text-center">Page Not Found</h1>
        </div>
      </>
    ),
  },
]);

export default router;
