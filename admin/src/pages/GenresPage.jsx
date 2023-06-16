import { Loading, GenreRow } from "../components";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGenres } from "../store/action/genres";

const GenresPage = () => {
  const { genres, loading, error } = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
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
