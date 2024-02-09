import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import searchFromIdAPI from "../data/search-from-id-API";
import { useParams } from "react-router-dom";

// purtroppo per mancanza di tempo non sono riuscito a fixare questo errore, mi arrivano correttamente i dati ma purtroppo non sono riuscito a capire bene il perchè arrivano soltato ad un compiling della pagina e non ad un aggiornamento deduco che non sia riuscito per problemi dovuti alla gestione del useEffect errata. ci sarà modo di approfondire

const CardDetails = (props) => {
  const params = useParams();
  const [city, setcity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let city1 = await searchFromIdAPI(params.city);
      setcity(city1);
      setIsLoading(false);
    };
    fetchData();
    console.log(city);
  }, []);

  return (
    <Card className="h-100 d-flex flex-column justify-content-center align-items-center">
      <Card.Img
        variant="top"
        // src={imgIcon}
        style={{ height: "100px", width: "100px" }}
      />
      <Card.Body>
        {/* <Card.Title>{city.name}</Card.Title> */}
        <Card.Text>{/* temp-max {city.main.temp_max}° */}</Card.Text>
        <Card.Text>{/* temp-min {city.main.temp_min}° */}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardDetails;
