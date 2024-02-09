import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import CitySearch from "./city-search";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar key={"md"} expand={"md"} className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <h3>Epimeteo</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end">
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Nav.Link href="#action2">Città</Nav.Link>
                <NavDropdown
                  className="text-white"
                  title="Accedi"
                  id={`offcanvasNavbarDropdown-expand-${"md"}`}>
                  <Form className="mx-3 px-3 ">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Inserisci E-mail"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Inserisci Password"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="non sono un robot" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      Accedi
                    </Button>
                  </Form>
                </NavDropdown>
                <CitySearch />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
