import { Outlet } from "react-router-dom";
import MyNavbar from "./MyNavbar";

const Layout = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
};

export default Layout;
