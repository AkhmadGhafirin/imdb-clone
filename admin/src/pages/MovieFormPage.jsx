import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

export default function MovieFormPage() {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log(data, "<<<<<<< berhasil post");
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            value={form?.title}
            onChange={handleOnChange}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSynopsis">
          <Form.Label>Synopsis</Form.Label>
          <Form.Control
            placeholder="Enter Synopsis"
            name="synopsis"
            value={form?.synopsis}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            placeholder="Enter Image URL"
            name="imgUrl"
            value={form?.imgUrl}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTrailer">
          <Form.Label>Trailer URL</Form.Label>
          <Form.Control
            placeholder="Enter Trailer URL"
            name="trailerUrl"
            value={form?.trailerUrl}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="rating"
              value={form?.rating}
              onChange={handleOnChange}
            >
              <option value="">Choose...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="genreId"
              value={form?.genreId}
              onChange={handleOnChange}
            >
              <option value="">Choose...</option>
              <option value="1">Comedy</option>
              <option value="2">Action</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="authorId"
              value={form?.authorId}
              onChange={handleOnChange}
            >
              <option value="">Choose...</option>
              <option value="1">John</option>
              <option value="2">Andy</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
