import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteGenre } from "../store/action/genres";

const GenreRow = ({ genre, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openEditGenre = () => {
    navigate(`/genres/edit/${genre?.id}`);
  };

  const handleDeleteGenre = async () => {
    try {
      await dispatch(deleteGenre(genre?.id));
      toast.success("Successfully delete genre");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{genre?.name}</td>
      <td>
        <div className="d-flex justify-content-center">
          <Button
            onClick={openEditGenre}
            size="sm"
            variant="outline-warning"
            className="me-1"
          >
            Edit
          </Button>
          <Button
            onClick={handleDeleteGenre}
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

export default GenreRow;
