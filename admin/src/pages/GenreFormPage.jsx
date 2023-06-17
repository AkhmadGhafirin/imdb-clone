import { Button, Form, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components";
import {
  createGenre,
  fetchGenreById,
  updateGenre,
} from "../store/action/genres";

const GenreFormPage = () => {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const loading = useSelector((state) => state.genres?.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const fetchData = async () => {
    try {
      if (id) {
        const data = await dispatch(fetchGenreById(id));
        setName(data?.name);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    try {
      if (name !== undefined && name !== "") {
        if (id) {
          await dispatch(updateGenre({ name }, id));
          toast.success("Successfully update genre");
        } else {
          await dispatch(createGenre({ name }));
          toast.success("Successfully create new genre");
        }
        navigate("/genres");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container className="py-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h2 className="text-center">{id ? "Edit Genre" : "Create Genre"}</h2>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleOnChange}
              type="text"
              required
              placeholder="Enter Name"
            />
            <Form.Control.Feedback type="invalid">
              Name is required
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-center my-5">
            <Button style={{ width: "250px" }} variant="dark" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default GenreFormPage;
