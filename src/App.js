import React from 'react'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Keyboards from './components/Keyboards';
import Nasa from './components/Nasa';
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
            <Navbar.Brand as={Link} to={"/"}>My React apps</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                
                <NavDropdown title="Examples" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/examples/nasa"}>Nasa</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/examples/keyboards"}>Keyboards</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/examples/warranty"}>Warranty</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/examples/nasa" component={Nasa} />
            <Route path="/examples/keyboards" component={Keyboards} />
            <Route path="/examples/warranty" component={Warranty} />
            <Route path="*" component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;