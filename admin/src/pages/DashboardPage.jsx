import { Loading, MovieTable } from "../components";
import { Container } from "react-bootstrap";
import useFetch from "../hooks/useFetch";

const DashboardPage = () => {
  const { data, loading } = useFetch("movies");

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container fluid className="p-4">
        <h3>Movie List</h3>
        <MovieTable movies={data} />
      </Container>
    </>
  );
};

export default DashboardPage;
