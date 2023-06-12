import { useEffect, useState } from "react";
import MovieTable from "../components/MovieTable";
import { Container } from "react-bootstrap";
import MovieFormPage from "./MovieFormPage";

export default function DashboardPage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch("http://localhost:3000/movies");
    const data = await response.json();
    console.log(data, "<<<<< movies");
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Container fluid className="p-4">
        <h3>Movie List</h3>
        <MovieTable movies={movies} />
        <MovieFormPage />
      </Container>
    </>
  );
}
