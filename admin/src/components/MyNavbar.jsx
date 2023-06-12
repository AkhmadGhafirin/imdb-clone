import { Container, Nav, Navbar } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="light" className="shadow">
        <Container fluid>
          <Navbar.Brand href="#home">Admin</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Dashborad</Nav.Link>
            <Nav.Link href="#features">Genre</Nav.Link>
            <Nav.Link href="#features">Register Admin</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
