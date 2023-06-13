import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 mb-4">
        <Card className="shadow h-100 bg-dark" style={{ cursor: "pointer" }}>
          <Card.Img src={movie.imgUrl} variant="top" height={250} />
          <Card.Body>
            <Card.Title className="text-light">
              {movie.title.length < 18
                ? movie.title
                : `${movie.title.slice(0, 18)}...`}
            </Card.Title>
            <Card.Text className="text-light">
              {movie.synopsis.length < 200
                ? movie.synopsis
                : `${movie.synopsis.slice(0, 200)}...`}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MovieCard;
