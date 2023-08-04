import "./navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar variant="light" expand="sm">
      <Container>
        <p className="m-2 main-heading nav-link"> Video Store</p>
        <Navbar.Toggle
          className="border-0"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link eventKey="1" as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to={"/customers_view"}>
              Customers
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
