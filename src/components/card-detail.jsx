import { useEffect, useState } from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import searchFromIdAPI from "../data/search-from-id-API";
import { useParams } from "react-router-dom";


const CardDetails = (props) => {
  const params = useParams();
  const [city, setCity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let city1 = await searchFromIdAPI(params.city);
      setCity(city1);
      setIsLoading(false);
    };
    fetchData();
  }, [params.city]);

  let cityName = "";
  let cityCountry = "";
  if (city && city.city) {
    cityName = city.city.name;
    cityCountry = city.city.country;
  }
  console.log(city);
  return (
    <>
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h5>
            {cityName} {cityCountry}
          </h5>
          {city.list
            .filter((item, index) => index < 5)
            .map((e) => {
              return (
                <Col key={e.dt} sm={12} md={6} lg={4} className="mt-5 ">
                  <Card className=" d-flex my-3 justify-content-center align-items-center">
                
                    <Card.Body>
                      <Card.Title>
                        {e.name} {e.sys.country}
                      </Card.Title>
                      <Card.Text>data e ora: {e.dt_txt}</Card.Text>
                      <Card.Text>temp-max {e.main.temp_max}°F</Card.Text>
                      <Card.Text>temp-min {e.main.temp_min}°F</Card.Text>
                      <Card.Text>vento, velocità: {e.wind.speed} kmh</Card.Text>
                      <Card.Text>umidità: {e.main.humidity}%</Card.Text>
                      <Card.Text>umidità: {e.weather[0].description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </>
      )}
    </>
  );
};

export default CardDetails;
