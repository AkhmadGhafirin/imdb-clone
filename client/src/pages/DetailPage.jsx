import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../store/action/movies";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading, CastCard } from "../components";

const DetailPage = () => {
  const loading = useSelector((state) => state.movies?.loading);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [movie, setMovie] = useState({});

  const fetchData = async () => {
    try {
      const data = await dispatch(fetchMovieDetail(slug));
      setMovie(data);
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <div className="d-flex flex-column">
              <Image src={movie?.imgUrl} alt={movie?.title} fluid />
              <Button
                href={movie?.trailerUrl}
                target="_blank_"
                className="mt-4"
                variant="warning"
              >
                Watch Trailer
              </Button>
            </div>
          </Col>
          <Col md={8}>
            <div className="d-flex justify-content-between">
              <h2 className="text-light">{movie?.title}</h2>
            </div>
            <div className="mb-3 text-light">
              <Badge bg="warning" text="dark">
                {movie?.Genre?.name}
              </Badge>
            </div>
            <div className="text-light">
              <strong>Rating:</strong> {movie?.rating}/10
            </div>
            <div className="mt-4 text-light">
              <h4>Synopsis</h4>
              <p>{movie?.synopsis}</p>
            </div>
            <div className="mt-4 text-light">
              <h4>Cast</h4>
              <Row>
                {movie?.Casts?.map((cast) => (
                  <CastCard key={cast?.id} cast={cast} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
