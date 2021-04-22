import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

import './NavBar.css';
import Logo from "../logo.png"

function NavBar () {
    return (

        <Navbar className="NavBar" bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img src={Logo} width="30" height="30" className="" alt="Gloss media logo"/>
            </Navbar.Brand>
            {/* <Navbar.Brand href="#home">Gloss Media</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Categoría 1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Categoría 2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Categoría 3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Categoría 4</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;