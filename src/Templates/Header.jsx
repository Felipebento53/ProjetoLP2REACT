
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Templates.css";


export function Header(props) {
    return (
        <div className="header">
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <div className="title-navbar"><Navbar.Brand href="/">SISTEMA</Navbar.Brand></div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="header-navbar">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/">Link</Nav.Link>
                                    <NavDropdown title="Tabelas/Cadastros" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/cliente">Cliente</NavDropdown.Item>
                                        <NavDropdown.Item href="/produto">Produto</NavDropdown.Item>
                                        <NavDropdown.Item href="/fornecedor">Fornecedor</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>

    );
}