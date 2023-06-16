import { Form, Card } from "react-bootstrap";
import { BsXSquare, BsXSquareFill } from "react-icons/bs";

const CastForm = ({ cast, castOnChange, removeCast }) => {
  const _removeCast = () => {
    removeCast(cast?.id);
  };

  return (
    <Card className="p-3 mb-3">
      <div className="d-flex justify-content-end">
        <BsXSquare
          onClick={_removeCast}
          style={{ cursor: "pointer" }}
          size={20}
        />
      </div>
      <Form.Group className="mb-3">
        <Form.Label>Cast Name</Form.Label>
        <Form.Control
          placeholder="Enter Cast Name"
          name={`name-${cast?.id}`}
          value={cast?.name}
          required
          type="text"
          autoComplete="off"
          onChange={castOnChange}
        />
        <Form.Control.Feedback type="invalid">
          Name is required
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Profile Picture URL</Form.Label>
        <Form.Control
          placeholder="Enter Profile Picture URL"
          name={`profilePicture-${cast?.id}`}
          value={cast?.profilePicture}
          required
          type="text"
          autoComplete="off"
          onChange={castOnChange}
        />
        <Form.Control.Feedback type="invalid">
          Profile Picture is required
        </Form.Control.Feedback>
      </Form.Group>
    </Card>
  );
};

export default CastForm;
