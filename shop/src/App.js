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
import axios from 'axios'
import Cart from './Cart'

let YellowBtn = styled.button`
  background : ${ props => props.bg};
  color : black;
  padding : 10px;
`

function App() {
  let [real, realize] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{realize(false)}, 2000);
    return ()=>{
      // useEffect전에 실행되는 return()=>{}
    }
  }, [])//count라는 변수가 변할때만 실행된다 물론 mount시에도 한번 실행된다
  
  let [탭, 탭변경] = useState(0)
  let [btnCount, setBtnCount] = useState(0);
  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();
  let [okay, setOkay] = useState(false)
  return (
    <div className="App">
      <Navbar expand="bg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick = {()=>{navigate('/detail/0')}}>Detail</Nav.Link>
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
            <Goods shoesObj = {shoes} Okay = {okay}></Goods>
            {
              btnCount < 2 ? (
                <button
                  onClick={() => {
                    setBtnCount(btnCount+1);
                    setOkay(true)
                    axios.get(`https://codingapple1.github.io/shop/data${btnCount+2}.json`)
                    .then((결과)=>{
                      let newShoes = [...shoes];
                      newShoes.push(...결과.data);
                      setShoes(newShoes);
                      setOkay(false)
                    })
                    .catch(()=>{
                      console.log("실패함요");
                    });
                  }}
                >
                  버튼
                </button>
              ) : null
            }
            {
               okay === true ? <Loading/> : null
            }
          </Container>
      }/>
        <Route path='/detail' element={<DetailPage shoes = {shoes}/>}>
          <Route path='member' element={<div>멤버임</div>} />
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>


        <Route path='/about' element={<About/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path='/detail/:id' element={<DetailPage shoes = {shoes}/>}></Route> //url파라미터


        <Route path="*" element={ <div>없는페이지임</div> } />
    </Routes>

    <Nav variant="tabs" defaultActiveKey="link-1">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link-1">HTML</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link-2">CSS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link-3">JS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent 탭 = {탭} shoes={shoes}/>
    <div className="main-bg" style={{backgroundImage : 'url( + bg + )'}}></div>
    {
      real == true ? <div className='alert alert-warning'>
                        2초이내 구매시 할인
                    </div> : null 
    }
    <input onInput={(e)=>{
      if((isNaN(e.target.value))){
        alert("숫자만치셈");
      }
    }} />
    </div>

  );
}
// function TabUI(){
//   return(
    
//   )
// }
function TabContent({탭, shoes}){
  
  
  let [fade, setFade] = useState('')
  useEffect(()=>{
    setTimeout(()=>{setFade('end')}, 100)
    return ()=>{
      setFade('')
    }
  }, [탭])
  return (<div className={'start ' + fade}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
         </div>)
}
function Loading(){
  return(
    <p>로딩중입니다...</p>
  )
}
function Timeout(){
  return(
    <div className='alert alert-warning'>
        2초이내 구매시 할인
    </div>
  )
}
// function Goods(props){
//   const { shoesObj } = props;
//   function chunkArray(arr, size) {
//     const chunkedArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//       chunkedArr.push(arr.slice(i, i + size));
//     }
//     return chunkedArr;
//   }

//   const chunkedShoes = chunkArray(shoesObj, 3);
//   return(
//     <>
//       {chunkedShoes.map((chunk, chunkIndex) => (
//         <Row key={chunkIndex}>
//           {chunk.map((a, i) => (
//             <Col key={i}>
//               <img src={`https://codingapple1.github.io/shop/shoes${a.id+1}.jpg`} width="80%" />
//               <h4>{a.title}</h4>
//               <p>{a.content}</p>
//             </Col>
//           ))}
//         </Row>
//       ))}
//     </> 
//   );
// }
function Goods(props) {
  const { shoesObj } = props;
  return (
    <Row>
      {shoesObj.map((a, i) => (
        <Col key={i} xs={12} sm={6} md={4} lg={4}>
          {/* 위의 코드에서 xs, sm, md, lg는 화면 크기에 따른 레이아웃을 조절하기 위한 옵션입니다. */}
          <img src={`https://codingapple1.github.io/shop/shoes${a.id + 1}.jpg`} width="80%" alt={a.title} />
          <h4>{a.title}</h4>
          <p>{a.content}</p>
        </Col>
      ))}
    </Row>
    
    );
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
  let [opa, setOpa] = useState('')
  useEffect(()=>{
    setTimeout(setOpa('end'), 1000);
    return(()=>{
      clearTimeout()
      setOpa('')
    })
  })
  id = parseInt(id)
  let newShoes = props.shoes.find(a => a.id === id)
  return(
    <div className={`container start ${opa}`}>
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
