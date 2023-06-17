import { Loading, MovieRow } from "../components";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../store/action/movies";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { movies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetch = async () => {
    try {
      await dispatch(fetchMovies());
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const openCreateMovie = () => {
    navigate("/movies/add");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container fluid className="p-4">
        <div className="d-flex justify-content-between mb-4">
          <h3 style={{ marginBottom: "0px" }}>Movie List</h3>
          <Button onClick={openCreateMovie} variant="outline-dark">
            Create Movie
          </Button>
        </div>
        <Table bordered responsive style={{ tableLayout: "auto" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Synopsis</th>
              <th>Genre</th>
              <th>Author</th>
              <th style={{ width: "150px" }}>Image</th>
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
