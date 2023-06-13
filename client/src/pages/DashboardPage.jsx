import { MovieCard } from "../components";
import useFetch from "../hooks/useFetch";
import { Container, Row } from "react-bootstrap";

const DashboardPage = () => {
  const { data, loading } = useFetch("movies");
  return (
    <>
      <Container className="py-4">
        <Row>
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;
