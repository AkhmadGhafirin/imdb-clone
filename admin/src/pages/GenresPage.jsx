import { Loading, GenreRow } from "../components";
import { Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGenres } from "../store/action/genres";
import { useNavigate } from "react-router-dom";

const GenresPage = () => {
  const { genres, loading } = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  const openCreateGenre = () => {
    navigate('/genres/add')
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container fluid className="p-4">
      <div className="d-flex justify-content-between mb-4">
          <h3 style={{ marginBottom: "0px" }}>Genre List</h3>
          <Button onClick={openCreateGenre} variant="outline-dark">
            Create Genre
          </Button>
        </div>
        <Table responsive bordered>
          <thead>
            <tr>
              <th style={{ width: "10px" }}>Id</th>
              <th>Name</th>
              <th style={{ width: "50px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {genres?.map((genre, index) => (
              <GenreRow key={genre.id} genre={genre} index={index} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default GenresPage;
