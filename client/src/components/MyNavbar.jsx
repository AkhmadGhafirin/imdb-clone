import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark" className="shadow">
        <Container fluid>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer", color: "#FFC107" }}
          >
            <strong>Imdb</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
