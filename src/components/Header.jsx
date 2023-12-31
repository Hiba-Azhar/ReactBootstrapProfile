import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header() {
  return (
    <Navbar expand='lg' className='bg-body-tertiary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href='#home'>Hiba's Progress</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Projects</Nav.Link>
            <Nav.Link href='#link'>Reviews</Nav.Link>
            <NavDropdown title='Contact us' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Facebook</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Github</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Other</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>About us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
