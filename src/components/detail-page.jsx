import { Col, Container, Row } from "react-bootstrap";
import CardDetails from "./card-detail";

const DetailPage = () => {
  return (
    <>
      <Container>
        <Row>
          <h1>Nel Dettaglio</h1>
          <Col>
            <CardDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
