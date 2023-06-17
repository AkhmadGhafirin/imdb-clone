import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteMovie } from "../store/action/movies";

const MovieRow = ({ movie, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openEditMovie = () => {
    navigate(`/movies/edit/${movie?.id}`);
  };

  const handleDeleteMovie = async () => {
    try {
      await dispatch(deleteMovie(movie?.id));
      toast.success("Successfully delete movie");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{movie?.title}</td>
      <td>{movie?.synopsis}</td>
      <td>{movie?.Genre?.name}</td>
      <td>{movie?.User?.username}</td>
      <td>
        <img
          alt={movie?.title}
          className="img-fluid"
          style={{ height: "200px", width: "500px" }}
          src={movie?.imgUrl}
        />
      </td>
      <td>
        <div className="d-flex  justify-content-center">
          <Button
            onClick={openEditMovie}
            size="sm"
            variant="outline-warning"
            className="me-1"
          >
            Edit
          </Button>
          <Button
            onClick={handleDeleteMovie}
            size="sm"
            variant="outline-danger"
            className="ms-1"
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default MovieRow;
