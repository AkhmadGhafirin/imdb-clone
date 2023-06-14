import { DashboardPage, DetailPage } from "../pages";
import Layout from "../components/Layout";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "detail/:slug",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
