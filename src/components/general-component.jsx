import { Container, Row, Col, Spinner } from "react-bootstrap";
import CardMeteo from "./card-meteo";
import { useParams } from "react-router-dom";
import searchAPI from "../data/search_API";
import { useEffect, useState } from "react";

const GeneralComponent = () => {
  const params = useParams();
  const [citys, setcitys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let citys1 = await searchAPI(params.search);
      console.log(citys1.list);
      setcitys(citys1);
      setIsLoading(false);
    };
    fetchData();
  }, [params.search]);

  return (
    <Container>
      <Row className="justify-content-center align-items-center mt-5 ">
        <h2>Scopri il meteo nella tua citta</h2>
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          citys.list.map((city, index) => {
            return (
              <Col key={index} sm={12} md={6} lg={4} className="mt-5 "
              style={{height: "300px"}}>
                <CardMeteo city={city} />
              </Col>
            );
          })
        )}
        
      </Row>
    </Container>
  );
};

export default GeneralComponent;
