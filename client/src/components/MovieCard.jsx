import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  const openDetail = () => {
    navigate(`movies/${movie?.slug}`)
  }

  return (
    <>
      <div onClick={openDetail} className="col-lg-3 col-md-6 mb-4">
        <Card className="shadow h-100 bg-dark" style={{ cursor: "pointer" }}>
          <Card.Img src={movie?.imgUrl} variant="top" height={250} />
          <Card.Body>
            <Card.Title className="text-light">
              {movie?.title.length < 23
                ? movie?.title
                : `${movie?.title.slice(0, 23)}...`}
            </Card.Title>
            <Card.Text className="text-light">
              {movie?.synopsis.length < 200
                ? movie?.synopsis
                : `${movie?.synopsis.slice(0, 200)}...`}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MovieCard;
