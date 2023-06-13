import { Container, Nav, Navbar } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="light" className="shadow">
        <Container fluid>
          <Navbar.Brand href="#home"><strong>Admin</strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#features">Genre</Nav.Link>
            <Nav.Link href="#features">Register Admin</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
