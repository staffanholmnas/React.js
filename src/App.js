import React from 'react'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Keyboards from './components/Keyboards';
import Computers from './components/Computers';
import Warranty from './components/Warranty';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

// An app using React Bootstrap and the NavBar as well as react router for navigiation.
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>My Bootstrap React app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/products/computers"}>Computers</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/products/keyboards"}>Keyboards</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/products/warranty"}>Warranty</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/products/keyboards" component={Keyboards} />
            <Route path="/products/computers" component={Computers} />
            <Route path="/products/warranty" component={Warranty} />
            <Route path="*" component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;