
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  let post = '강남 우동 맛집'
  let [글제목,b] = useState(['남자코트 추천', '맛집추천', '가딩추천'])
  let [logo, setLogo] = useState('ReactBlog')
  let [따봉, 따봉변경] = useState(new Array(글제목.length).fill(0))
  let [modal, setmodal] = useState(false)
  let [count, setCount] = useState();
  let [입력값, 입력값변경] = useState('')


  const changeTitle = () => {
  const newTitle = [...글제목]
  newTitle[0] = '여자코트추천';
  b(newTitle)
}
function pickIndex(i){
  let number = i;
  setCount(number)
}
function clickBtn(){
  let copy = [...글제목];
  copy[0] = '여자코트 추천'
  b(copy)
}
function addText(){
  let copyText = [...글제목]
  copyText.push(입력값)
  b(copyText)
  let arr = [...따봉]
  arr.push(0)
  따봉변경(arr);
}

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick={()=>{
        let copyright = [...글제목]
        copyright.sort()
        b(copyright)
      }}>가나다순정렬</button>
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key = {i}>
              <h4 onClick={()=>{
                  setmodal(true)
                  pickIndex(i)}}>{ a } 
                <button onClick={()=>{
                  let copy = [...글제목];
                  copy[0] = '여자코트 추천'
                  b(copy)
                }}></button>
                <span onClick={(e)=>{
                  e.stopPropagation()
                  let new따봉 = [...따봉]
                  new따봉[i] = 따봉[i]+1
                  따봉변경(new따봉)
                }
              }>👍</span> {따봉[i]} </h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  pickIndex(i)
                  let like = [...따봉]
                  let copyText1 = [...글제목]
                  copyText1.splice(i, 1)
                  like.splice(i, 1)
                  따봉변경(like)
                  b(copyText1)
                }}>삭제띠</button>
            </div>
          )
        })
      }
      <input onInput={(e)=>{
        입력값변경(e.target.value);}} />
        <button onClick={()=>{
          if(입력값 != ''){
            addText()
          }
          }}></button>
      {
        modal == true ? <Modal click={clickBtn} color={'yellow'} 작명={글제목[count]}/> : null
      }
    </div>
  );  
}
function Modal(props){
  return(
      <div className="modal" style={{background : props.color}}>
        <h4>{props.작명}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.click}>글수정</button>
      </div>
  )
}


export default App;
