import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#0066ff" }}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "#ffffff", fontWeight: "bold", fontSize: 25 }}
        >
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#ffffff", fontSize: 19 }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "#ffffff", fontSize: 19 }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
