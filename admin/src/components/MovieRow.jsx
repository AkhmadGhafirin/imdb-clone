import { Button } from "react-bootstrap";

const MovieRow = ({ movie, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{movie?.title}</td>
      <td>{movie?.synopsis}</td>
      <td>{movie?.genreId}</td>
      <td>{movie?.authorId}</td>
      <td>
        <img
          alt={movie?.title}
          className="img-fluid"
          style={{ height: "200px", width: "500px" }}
          src={movie?.imgUrl}
        />
      </td>
      <td>
        <div className="d-flex justify-content-center">
          <Button variant="outline-warning" className="me-1">
            Edit
          </Button>
          <Button variant="outline-danger" className="ms-1">
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default MovieRow;
