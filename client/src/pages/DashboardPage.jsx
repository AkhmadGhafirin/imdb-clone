import { MovieCard, Loading } from "../components";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../store/action/movies";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const { movies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      await dispatch(fetchMovies());
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    fetchData();
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
