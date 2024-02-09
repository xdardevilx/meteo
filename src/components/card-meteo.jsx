import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const CardMeteo = (props) => {
  let city = props.city;
  let imgIcon = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`;
  return (
    <Card className="h-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Img
        variant="top"
        src={imgIcon}
        style={{ height: "100px", width: "100px" }}
      />
      <Card.Body>
        <Card.Title>
          {city.name} {city.sys.country}
        </Card.Title>
        <Card.Text>
          temp-max {city.main.temp_max}°
        </Card.Text>
        <Card.Text>
        temp-min {city.main.temp_min}°
        </Card.Text>
        <Button>dettagli</Button>
      </Card.Body>
    </Card>
  );
};

export default CardMeteo;
