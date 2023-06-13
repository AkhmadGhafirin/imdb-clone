import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="shadow">
        <Container fluid>
          <Navbar.Brand href="#home">
            <strong>Imdb</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
