import { Container, Row } from "react-bootstrap";
import CardDetails from "./card-detail";

const DetailPage = () => {
  return (
    <>
      <Container>
        <Row>
          <h1>Nel Dettaglio</h1>
          <CardDetails />
        </Row>
      </Container>
    </>
  );
};

export default DetailPage;
