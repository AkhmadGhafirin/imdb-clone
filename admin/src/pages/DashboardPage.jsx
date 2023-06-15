import { Loading, MovieRow } from "../components";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../store/action/movies";

const DashboardPage = () => {
  const { movies, loading, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container fluid className="p-4">
        <h3>Movie List</h3>
        <Table responsive bordered>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Synopsis</th>
              <th>Genre</th>
              <th>Author</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies?.map((movie, index) => (
              <MovieRow key={movie.id} movie={movie} index={index} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default DashboardPage;
