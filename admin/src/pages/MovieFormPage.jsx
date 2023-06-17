import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CastForm from "../components/CastForm";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  createMovie,
  fetchMovieById,
  updateMovie,
} from "../store/action/movies";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components";
import { fetchGenres } from "../store/action/genres";

const MovieFormPage = () => {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const loadingMovies = useSelector((state) => state.movies?.loading);
  const loadingGenres = useSelector((state) => state.genres?.loading);
  const genres = useSelector((state) => state.genres?.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    synopsis: "",
    imgUrl: "",
    trailerUrl: "",
    rating: "",
    genreId: "",
  });

  const [casts, setCasts] = useState([
    {
      id: 1,
      name: "",
      profilePict: "",
    },
  ]);

  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchData = async () => {
    try {
      await dispatch(fetchGenres());
      if (id) {
        const data = await dispatch(fetchMovieById(id));
        console.log(data, "<<<< movie detail data >>>>");
        setForm({
          title: data?.title,
          synopsis: data?.synopsis,
          imgUrl: data?.imgUrl,
          trailerUrl: data?.trailerUrl,
          rating: data?.rating,
          genreId: data?.genreId,
        });
        const dataCasts = data?.Casts?.map((el) => {
          delete el.movieId;
          return el;
        });
        setCasts(dataCasts);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const castOnChange = (e) => {
    const { value, name } = e.target;
    const id = name?.split("-")[1];
    const inputName = name?.split("-")[0];
    const newCasts = casts?.map((cast) => {
      if (cast?.id == id) {
        return {
          ...cast,
          [inputName]: value,
        };
      }
      return cast;
    });
    setCasts(newCasts);
  };

  const addCast = () => {
    const id = casts[casts?.length - 1]?.id + 1 || 1;
    setCasts([
      ...casts,
      {
        id,
        name: "",
        profilePict: "",
      },
    ]);
  };

  const removeCast = (id) => {
    const newCasts = casts?.map((cast) => {
      return cast;
    });
    const filterCasts = newCasts.filter((cast) => {
      return cast?.id !== id;
    });
    setCasts(filterCasts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    try {
      if (checkValidate()) {
        const payload = { ...form };
        payload.casts = [...casts];
        console.log(payload, "<<<< movie payload");
        if (id) {
          await dispatch(updateMovie(payload, id));
          toast.success("Successfully update movie");
        } else {
          await dispatch(createMovie(payload));
          toast.success("Successfully create new movie");
        }
        navigate("/");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  const checkValidate = () => {
    const { title, synopsis, imgUrl, trailerUrl, rating, genreId } = form;
    const validateCasts = casts?.filter((cast) => {
      return !cast?.name || !cast.profilePict;
    });

    return (
      title !== undefined &&
      title !== "" &&
      synopsis !== undefined &&
      synopsis !== "" &&
      imgUrl !== undefined &&
      imgUrl !== "" &&
      trailerUrl !== undefined &&
      trailerUrl !== "" &&
      rating !== undefined &&
      rating !== "" &&
      genreId !== undefined &&
      genreId !== "" &&
      validateCasts.length === 0
    );
  };

  if (loadingMovies || loadingGenres) {
    return <Loading />;
  }

  return (
    <>
      <Container className="py-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h2 className="text-center">{id ? "Edit Movie" : "Create Movie"}</h2>
          <h5 className="mt-5">Movie</h5>
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
            <Form.Control.Feedback type="invalid">
              Title is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Synopsis</Form.Label>
            <Form.Control
              as={"textarea"}
              placeholder="Enter Synopsis"
              name="synopsis"
              value={form?.synopsis}
              style={{ minHeight: "150px" }}
              type="text"
              autoComplete="off"
              required
              onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Synopsis is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              placeholder="Enter Image URL"
              name="imgUrl"
              value={form?.imgUrl}
              required
              type="text"
              autoComplete="off"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Image URL is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Trailer URL</Form.Label>
            <Form.Control
              placeholder="Enter Trailer URL"
              name="trailerUrl"
              value={form?.trailerUrl}
              required
              type="text"
              autoComplete="off"
              onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Trailer URL is required
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Rating</Form.Label>
              <Form.Select
                name="rating"
                value={form?.rating}
                required
                onChange={handleOnChange}
              >
                <option disabled value="">
                  Choose...
                </option>
                {ratings?.map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Rating is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Select
                name="genreId"
                required
                value={form?.genreId}
                onChange={handleOnChange}
              >
                <option disabled value="">
                  Choose...
                </option>
                {genres?.map((genre) => (
                  <option key={genre?.id} value={genre?.id}>
                    {genre?.name}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Genre is required
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className="d-flex flex-column">
            <h5>Casts</h5>

            {casts?.map((cast) => (
              <CastForm
                key={cast?.id}
                cast={cast}
                removeCast={removeCast}
                castOnChange={castOnChange}
              />
            ))}

            <div className="d-flex justify-content-end">
              <Button onClick={addCast} variant="outline-primary">
                Add Cast
              </Button>
            </div>
          </div>
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

export default MovieFormPage;
