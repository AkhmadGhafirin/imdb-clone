import { Button } from "react-bootstrap";

const GenreRow = ({ genre, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{genre.name}</td>
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

export default GenreRow;
