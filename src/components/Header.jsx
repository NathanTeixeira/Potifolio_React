import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="/">Nathan Teixeira</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/projetos">Projetos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
