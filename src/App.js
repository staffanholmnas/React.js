import React from 'react'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import GitHub from './components/GitHub';
import Nasa from './components/Nasa';
import Trivia from './components/Trivia';
import Todo from './components/Todo';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

// An app using React Bootstrap and the NavBar as well as react router for navigiation.
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand as={Link} to={"/"}>My React apps</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <NavDropdown title="Apps" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/apps/nasa"}>Nasa</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/apps/github"}>GitHub</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/apps/trivia"}>Trivia</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/apps/todo"}>Todo</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/apps/nasa" component={Nasa} />
            <Route path="/apps/github" component={GitHub} />
            <Route path="/apps/trivia" component={Trivia} />
            <Route path="/apps/todo" component={Todo} />
            <Route path="*" component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;