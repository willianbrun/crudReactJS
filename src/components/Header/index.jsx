import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import logoApp from '../../images/logo.png';

import './style.css';

function Header() {
    return (
        <header>
            <Navbar expand='md'>
                <Container>
                    <Navbar.Brand to='/dashboard' as={Link}>
                        <img src={logoApp} alt='Logo App' width='70' />
                    </Navbar.Brand>

                    <Navbar.Toggle className="toggle-icon">
                        <i className="fa fa-bars" style={{ color: 'white' }}></i>
                    </Navbar.Toggle>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link to="/departamento" as={Link}>Departamento</Nav.Link>
                            <Nav.Link to="/category" as={Link}>Categorias</Nav.Link>
                            <Nav.Link to="/patrimony" as={Link}>Patrimônios</Nav.Link>
                            <Navbar.Text className="divisor" />
                            <Nav.Link href="/">Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;