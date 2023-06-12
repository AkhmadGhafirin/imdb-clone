import { Card } from "react-bootstrap";

export default function MovieCard() {
  return (
    <>
      <div className="col-lg-3 col-md-6 mb-4">
        <Card className="shadow" style={{ cursor: "pointer" }}>
          <Card.Img
            src="https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
            variant="top"
            height={250}
          />
          <Card.Body className="d-flex justify-content-between pb-0 pe-16 ps-16 pt-16">
            <Card.Title
              className="badge"
              style={{ backgroundColor: "#1e90ff" }}
            >
              genre
            </Card.Title>
          </Card.Body>
          <Card.Body className="pb-16 pe-16 ps-16 pt-0">
            <Card.Title>title</Card.Title>
            <Card.Text>description</Card.Text>
            <Card.Text className="fw-bold fs-4" style={{ color: "#1e90ff" }}>
              Rp.200000
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
