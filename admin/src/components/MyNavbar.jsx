import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" className="shadow">
        <Container fluid>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <strong>Admin</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item className="mx-2">
              <NavLink
                to={"/"}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "black" : "grey",
                })}
              >
                Dashboard
              </NavLink>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <NavLink
                to={"/genres"}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "black" : "grey",
                })}
              >
                Genres
              </NavLink>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <NavLink
                to={"/register"}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "black" : "grey",
                })}
              >
                Register Admin
              </NavLink>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <NavLink
                to={"/"}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "black" : "grey",
                })}
              >
                Logout
              </NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
