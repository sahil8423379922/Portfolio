import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const handleResumeClick = () => {
    window.location.href = "https://drive.google.com/file/d/1F3sGsM8amdK6wXtsW10xOe-KBjFfdOtd/view?usp=sharing";
  };

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
            <Nav.Link href="/" style={{ color: "#ffffff", fontSize: 19 }}>
              Home
            </Nav.Link>
            <Nav.Link href="/contact" style={{ color: "#ffffff", fontSize: 19 }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Button onClick={handleResumeClick}>Resume</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
