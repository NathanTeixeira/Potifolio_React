import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="/">Nathan Teixeira</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Potifolio_React/">Home</Nav.Link>
            <Nav.Link href="/Potifolio_React/contato">Contato</Nav.Link>
            <Nav.Link href="/Potifolio_React/sobre">Sobre</Nav.Link>
            <Nav.Link href="/Potifolio_React/projetos">Projetos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
