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
        path: "movies/:slug",
        element: <DetailPage />,
      },
    ],
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
