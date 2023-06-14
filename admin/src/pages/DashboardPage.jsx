import { Loading, MovieTable } from "../components";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../store/action/movies";

const DashboardPage = () => {
  const { movies, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Container fluid className="p-4">
        <h3>Movie List</h3>
        {movies}
        {/* <MovieTable movies={movies} /> */}
      </Container>
    </>
  );
};

export default DashboardPage;
