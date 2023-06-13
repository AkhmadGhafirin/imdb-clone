import MovieTable from "../components/MovieTable";
import { Container } from "react-bootstrap";
import MovieFormPage from "./MovieFormPage";
import useFetch from "../hooks/useFetch";

export default function DashboardPage() {
  const { data, loading } = useFetch("movies");

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Container fluid className="p-4">
        <h3>Movie List</h3>
        <MovieTable movies={data} />
        <MovieFormPage />
      </Container>
    </>
  );
}
