import MovieCard from "../components/MovieCard";
import MyNavbar from "../components/MyNavbar";
import useFetch from "../hooks/useFetch";
import { Container, Row } from "react-bootstrap";

export default function DashboardPage() {
  const { data, loading } = useFetch("movies");
  return (
    <>
      <MyNavbar />
      <Container className="py-4">
        <Row>
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </>
  );
}
