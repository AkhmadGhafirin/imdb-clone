import MyNavbar from "./components/MyNavbar";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNavbar />
      {/* <LoginPage /> */}
      <DashboardPage />
    </>
  );
}

export default App;
