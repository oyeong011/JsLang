import { useState } from 'react';
import './App.css';
import Form from './component/Form';
import List from './component/List';

function App() {
  const initialItem = localStorage.getItem("payList")
  ? localStorage.getItem("payList")
  : [];
  const [payList, setPayList] = useState([
    {
      id : 1,
      titlePay : "식비",
      payment : 1200,
      completed : false
    },
    {
      id : 2,
      titlePay : "교통비",
      payment : 12000,
      completed : false
    }
  ]);
  
  const [titleValue, setTitleValue] = useState("")
  const [paymentValue, setPaymentValue] = useState(0)

  
  
  
  
  
  
  const totalAmount = () => {
    let amount = 0
    payList.forEach((data) => {
      amount += parseInt(data.payment)
    })
    return amount
  }


  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
    console.log('TitleValue: ', titleValue);
  }
  const handlePaymentChange = (e) => {
    setPaymentValue(e.target.value);
    console.log('paymentValue: ', paymentValue);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    let newPayList = {
      id : Date.now(),
      titlePay : titleValue,
      payment : paymentValue
    }

    setPayList((data) => [...data, newPayList])
    localStorage.setItem("payList", JSON.stringify([...payList, newPayList]));
    
    setTitleValue("");
    setPaymentValue("");
  }

  const handleCheck = (id) => {
    let newPayList = payList.map((data) => {
      if(data.id === id){
        data.completed = !data.completed
      }
      return data;
    })
    setPayList(newPayList);
    localStorage.setItem("payList", JSON.stringify(newPayList));
  }

  const handleRemoveAll = () => {
    setPayList([]);
    localStorage.setItem("payList", JSON.stringify([]))
  }

  return (
    <div className='bg-amber-600 w-screen h-screen flex items-center justify-center flex-col'>
      <h1 className='font-bold'>예산 계산기</h1>
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <Form
          handleTitleChange={handleTitleChange}
          handlePaymentChange={handlePaymentChange}
          handleSubmit={handleSubmit}
          titleValue = {titleValue}
          paymentValue = {paymentValue}
        />
        {payList.map((data) => {
          return(
            <List
              payList = {payList}
              titleValue = {titleValue}
              paymentValue = {paymentValue}
              id = {data.id}
              title = {data.titlePay}
              payment = {data.payment}
              completed = {data.completed}
              handleCheck = {handleCheck}
            />
          )
        })}



        <div className='flex justify-between'>
          <button onClick={handleRemoveAll}>목록 지우기</button>
          <p>총지출: {totalAmount()}원</p>

        </div>
      
      </div>
    </div>
  )
}

export default App;
