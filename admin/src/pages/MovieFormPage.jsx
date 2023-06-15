import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { useState } from "react";

const MovieFormPage = () => {
  const [form, setForm] = useState({
    title: "",
    synopsis: "",
    imgUrl: "",
    trailerUrl: "",
    rating: "",
    genreId: "",
    authorId: "",
  });

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
      <Container className="py-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              autoComplete="off"
              value={form?.title}
              onChange={handleOnChange}
              type="text"
              required
              placeholder="Enter Title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Synopsis</Form.Label>
            <Form.Control
              placeholder="Enter Synopsis"
              name="synopsis"
              value={form?.synopsis}
              autoComplete="off"
              required
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              placeholder="Enter Image URL"
              name="imgUrl"
              value={form?.imgUrl}
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Trailer URL</Form.Label>
            <Form.Control
              placeholder="Enter Trailer URL"
              name="trailerUrl"
              value={form?.trailerUrl}
              required
              autoComplete="off"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Rating</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="rating"
                value={form?.rating}
                required
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

            <Form.Group as={Col}>
              <Form.Label>Genre</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="genreId"
                required
                value={form?.genreId}
                onChange={handleOnChange}
              >
                <option value="">Choose...</option>
                <option value="1">Comedy</option>
                <option value="2">Action</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default MovieFormPage;
