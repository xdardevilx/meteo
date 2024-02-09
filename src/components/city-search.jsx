import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";

const CitySearch = () => {
  const [city, setCity] = useState("");

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Inserisci la tua città"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setCity(e.target.value)}
      />
      <Link to={`/${city}`} className="btn btn-success">
        Cerca
      </Link>
    </Form>
  );
};

export default CitySearch;
