import { Button } from "react-bootstrap";

const GenreRow = ({ genre, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{genre?.name}</td>
      <td>
        <div className="d-flex justify-content-center">
          <Button size="sm" variant="outline-warning" className="me-1">
            Edit
          </Button>
          <Button size="sm" variant="outline-danger" className="ms-1">
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default GenreRow;
