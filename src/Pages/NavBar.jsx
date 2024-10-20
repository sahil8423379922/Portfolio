import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-scroll";

function NavBar() {
  const handleResumeClick = () => {
    window.location.href = "https://drive.google.com/file/d/135lGbPcOMMUPHpwVA9zhknuietvUfYfT/view?usp=sharing";
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#0066ff" }} fixed="top">
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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust if using fixed navbar
            duration={500}
            style={{ color: "#ffffff", fontSize: 19, cursor: "pointer", padding: '0.5rem' }}
          >
              Home
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70} // Adjust if using fixed navbar
            duration={500}
            style={{ color: "#ffffff", fontSize: 19, cursor: "pointer", padding: '0.5rem' }}
          >
              Skills
          </Link>

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
