import { Button, Col, Form, Row } from "react-bootstrap";

export default function MovieFormPage() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSynopsis">
          <Form.Label>Synopsis</Form.Label>
          <Form.Control placeholder="Enter Synopsis" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control placeholder="Enter Image URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTrailer">
          <Form.Label>Image URL</Form.Label>
          <Form.Control placeholder="Enter Trailer URL" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
