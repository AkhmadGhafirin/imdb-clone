import { Container, Nav, Navbar } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="shadow">
        <Container fluid>
          <Navbar.Brand href="#home">
            <strong>Admin</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="#home">
              Dashboard
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#features">
              Genre
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#features">
              Register Admin
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#pricing">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
