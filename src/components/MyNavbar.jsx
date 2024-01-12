import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = (props) => {
    return (
        <Navbar collapseOnSelect expand="sm" className="bg-body-info bg-info">
            <Container fluid>
                <Navbar.Brand className="text-light" href="#">
                <img
                        src='https://www.arpa.piemonte.it/app/logo-app-meteo/image'
                        height="30"
                        className="d-inline-block align-top"
                        alt="Your Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-left'>
                        <Nav.Link className="text-light" href="http://localhost:3000/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;