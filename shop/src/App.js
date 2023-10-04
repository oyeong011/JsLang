import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bg from './img/bg.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data';


function App() {
  let [shoes] = useState(data)
  console.log(shoes);
  return (
    <div className="App">
      <Navbar expand="bg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="main-bg" style={{backgroundImage : 'url( + bg + )'}}></div>
    <Container>
      <Row>
        <Goods shoesObj = {shoes}></Goods>
      </Row>
    </Container>
    </div>
  );
}
function Goods(props){
  return(
    props.shoesObj.map(function(a, i){
    <Col key={i}>
          <img src={process.env.PUBLIC_URL + ''} alt="" />
          <img src="https://codingapple1.github.io/shop/shoes1.jpg"  width = "80%"/>
          <h4>{a.title}</h4>
          <p>{a.content}</p>
    </Col>
    }
  ));
}

export default App;
