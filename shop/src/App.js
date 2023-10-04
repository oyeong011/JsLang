import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import data from './data';
import {Routes, Route, Link, useNavigate, Outlet, useParams} from 'react-router-dom'
import styled from 'styled-components'
import { useEffect } from 'react';


let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color : black;
  padding : 10px;
`

function App() {

  useEffect(()=>{
    console.log("안녕");
  })

  let [count, setCount] = useState(0);

  let [shoes] = useState(data)
  let navigate = useNavigate();
  return (
    <div className="App">
      <YellowBtn bg = "blue"></YellowBtn>
      <YellowBtn bg = "orange"></YellowBtn>
      <Navbar expand="bg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick = {()=>{navigate('/detail:id')}}>Detail</Nav.Link>
            <Nav.Link onClick = {()=>{navigate('/about')}}>Event</Nav.Link>
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


    <Routes>
        <Route path='/' element={
          <Container>
            <Row>
              <Goods shoesObj = {shoes}></Goods>
            </Row>
          </Container>
        } />
        <Route path='/detail' element={<DetailPage shoes = {shoes}/>}>
          <Route path='member' element={<div>멤버임</div>} />
        </Route>
        <Route path='/about' element={<About/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path='/detail/:id' element={<DetailPage shoes = {shoes}/>}></Route> //url파라미터


        <Route path="*" element={ <div>없는페이지임</div> } />
    </Routes>

    <div className="main-bg" style={{backgroundImage : 'url( + bg + )'}}></div>
    </div>
  );
}
function Goods(props){
  return(
    props.shoesObj.map(function(a, i){
      return(  
        <Col key={i}>
              <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`}  width = "80%"/>
              <h4>{a.title}</h4>
              <p>{a.content}</p>
        </Col>
      );
    }
  ));
}
function About(){
  return (
    <div>
      <Link to="/about/one">One</Link>
      <Link to="/about/two">Two</Link>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
function DetailPage(props){
  
  let {id} = useParams();
  id = parseInt(id)
  let newShoes = props.shoes.find(a => a.id === id)
  console.log('id: ', id);
  
  console.log('newShoes.find(item => item.id === id): ');
  return(
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{newShoes.title}</h4>
        <p>{newShoes.content}</p>
        <p>{newShoes.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
  )
}

export default App;
