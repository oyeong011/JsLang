import './App.css';
import React, {useState} from 'react';
import List from './components/List';
import Form from './components/Form';


// export default class App extends Component {
//   state = {
//     todoData : [],
//     value: ""
//   }

  // btnStyle = {
  //   background : "black",
  //   color : "#AAA",
  //   border : "none",
  //   padding : "5px 9px",
  //   borderRadius : "50%",
  //   cursor : "pointer",
  //   float : "right"
  // }

  // getStyle = (completed) => {
  //   return{
  //     padding : "10px",
  //     borderBottom : "1px #ccc dotted",
  //     textDecoration : completed ?  "line-through" : "none"
  //   };
  // }

  // listStyle = () => {
  //   return{
  //     padding : "10px",
  //     borderBottom : "1px #ccc dotted",
  //     textDecoration : "line-through"
  //   }
  // }

  // handleClick = (id) => {
  //   let newTodoData = this.state.todoData.filter((data) => data.id !== id)
  //   this.setState({ todoData : newTodoData})
  // }

  // handleChange = (e) => {
  //   console.log('e: ', e.target.value);
  //   this.setState({ value : e.target.value});
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()

  //   let newTodo = {
  //     id : Date.now(),
  //     title : this.state.value,
  //     completed : false
  //   };

  //   this.setState({ todoData : [...this.state.todoData , newTodo], value : ""})
  // }
  // handleCompleChange = (id) => {
  //   let newTodoData = this.state.todoData.map((data) => {
  //     if(data.id === id){
  //       data.completed = !data.completed;
  //     }
  //     return data;
  //   });
  //   this.setState({ todoData : newTodoData });

  // }
  // render(){
  //   return (
  //     <div className="container">
  //       <div className="todoBlock">
  //         <div className='title'>
  //           <h1>할일 목록</h1>
  //         </div>
  //         {/* map을 이용해서 요소 자동 생성 및 클래스로 동적 생성 */}
  //         {this.state.todoData.map((data)=>(
  //           <div style={this.getStyle(data.completed)} key={data.id}>
  //             <input
  //               type="checkbox"
  //               onChange={this.handleCompleChange(data.id)}
  //               defaultChecked={data.completed}
  //             />
  //             {" "}{data.title}
  //             <button
  //               style={this.btnStyle}
  //               onClick={() => this.handleClick(data.id)}
  //             >
  //               x
  //             </button>
  //           </div>
  //         ))}

  //         <form style={{display: 'flex'}}>
  //           <input
  //             type="text"
  //             name="value"
  //             style={{flex : '10', padding : '5px'}}
  //             placeholder='해야 할 일을 입력하세요'
  //             value={this.state.value}
  //             onChange={this.handleChange}
  //           />
  //           <input
  //             type="submit"
  //             value="입력"
  //             className='btn'
  //             style={{ flex : '1'}}
  //             onClick={this.handleSubmit}
  //           />
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
// }

// export default function App(){
//   const [todoData, setTodoData] = useState([
//     {
//       id : 1,
//       title : "공부하기",
//       completed : true
//     },
//     {
//       id : 2,
//       title : "청소하기",
//       completed : false
//     }
//   ]) 
//   const [value, setValue] = useState("")
  

//   let btnStyle = {
//     background : "black",
//     color : "#AAA",
//     border : "none",
//     padding : "5px 9px",
//     borderRadius : "50%",
//     cursor : "pointer",
//     float : "right"
//   }

//   const getStyle = (completed) => {
//     return{
//       padding : "10px",
//       borderBottom : "1px #ccc dotted",
//       textDecoration : completed ?  "line-through" : "none"
//     };
//   }



//   const handleClick = (id) => {
//     let newTodoData = todoData.filter((data) => data.id !== id)
//     setTodoData(newTodoData)
//   }

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     let newTodo = {
//       id : Date.now(),
//       title : value,
//       completed : false
//     };

//     setTodoData((prev) => [...prev, newTodo])
//     setValue("")
//   }

//   const handleCompleChange = (id) => {
//     let newTodoData = todoData.map((data) => {
//       if(data.id === id){
//         data.completed = !data.completed;
//       }
//       return data;
//     });
//     setTodoData(newTodoData);
//   }
  
//   return(
//         <div className="container">
//           <div className="todoBlock">
//             <div className='title'>
//               <h1>할일 목록</h1>
//           </div>
//          {/* map을 이용해서 요소 자동 생성 및 클래스로 동적 생성 */}
//             {todoData.map((data)=>(
//             <div style={getStyle(data.completed)} key={data.id}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleCompleChange(data.id)}
//                 defaultChecked={data.completed}
//               />
//               {" "}{data.title}
//               <button
//                 style={btnStyle}
//                 onClick={() => handleClick(data.id)}
//               >
//                 x
//               </button>
//             </div>
//           ))}

//           <form style={{display: 'flex'}}>
//             <input
//               type="text"
//               name="value"
//               style={{flex : '10', padding : '5px'}}
//               placeholder='해야 할 일을 입력하세요'
//               value={value}
//               onChange={handleChange}
//             />
//             <input
//               type="submit"
//               value="입력"
//               className='btn'
//               style={{ flex : '1'}}
//               onClick={handleSubmit}
//             />
//           </form>
//         </div>
//       </div>
//   )
// }
export default function App(){
  const [todoData, setTodoData] = useState([
    {
      id : 1,
      title : "공부하기",
      completed : true
    },
    {
      id : 2,
      title : "청소하기",
      completed : false
    }
  ]) 
  const [value, setValue] = useState("")





  
  return(
    <div className="container">
      <div className="todoBlock">
        <div className='title'>
          <h1>할일 목록</h1>
      </div>

      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <List todoData = {todoData} setTodoData = {setTodoData}/>
      <Form value={value} setValue = {setValue} setTodoData = {setTodoData}/>
      </div>
    </div>
  )
}