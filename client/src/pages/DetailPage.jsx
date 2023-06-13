import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  ListGroup,
  Button,
} from "react-bootstrap";
const DetailPage = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <div className="d-flex flex-column">
              <Image
                src="https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX600_.jpg"
                alt="Movie Poster"
                fluid
              />
              <Button className="mt-4" variant="warning">
                Watch Trailer
              </Button>
            </div>
          </Col>
          <Col md={8}>
            <div className="d-flex justify-content-between">
              <h2 className="text-light">Movie Title</h2>
              {/* <Button variant="warning">Watch Trailer</Button> */}
            </div>
            <div className="mb-3 text-light">
              <Badge bg="warning" text="dark">
                Genre
              </Badge>
            </div>
            <div className="text-light">
              <strong>Rating:</strong> 8.5/10
            </div>
            <div className="mt-4 text-light">
              <h4>Plot Summary</h4>
              <p>Movie plot summary goes here.</p>
            </div>
            <div className="mt-4 text-light">
              <h4>Cast</h4>
              <ListGroup horizontal>
                <ListGroup.Item>Actor 1</ListGroup.Item>
                <ListGroup.Item>Actor 2</ListGroup.Item>
                <ListGroup.Item>Actor 3</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
