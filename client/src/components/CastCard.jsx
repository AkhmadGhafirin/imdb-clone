import { Card, Image } from "react-bootstrap";

const CastCard = ({ cast }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 mb-4">
        <Card className="shadow bg-dark" style={{ padding: "10px" }}>
          <Image
            style={{ height: "180px" }}
            src={cast?.profilePict}
            alt={cast?.name}
            roundedCircle
          />
          <Card.Body className="p-0 mt-3">
            <Card.Title className="text-center text-white">{cast?.name}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CastCard;
