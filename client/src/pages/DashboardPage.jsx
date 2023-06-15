import { MovieCard, Loading } from "../components";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies, fetchMovieDetail } from "../store/action/movies";

const DashboardPage = () => {
  const { movies, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container className="py-4">
        <Row>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DashboardPage;
