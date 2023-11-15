import { useState } from 'react';
import './App.css';
import Form from './component/Form';
import List from './component/List';

function App() {
  const initialItem = localStorage.getItem("payList")
  ? JSON.parse(localStorage.getItem("payList"))
  : [];
  const [payList, setPayList] = useState(initialItem);
  
  const [titleValue, setTitleValue] = useState("")
  const [paymentValue, setPaymentValue] = useState(0)

  //총합 계산
  const totalAmount = () => {
    let amount = 0
    payList.forEach((data) => {
      amount += parseInt(data.payment)
    })
    return amount
  }

  //휴지통 버튼
  const handleEleRemove = (id) => {
    let newPayList = payList.filter((data) => data.id !== id)
  
    setPayList(newPayList);
    localStorage.setItem("patList", JSON.stringify(newPayList))
  }
  
  //지출 항목에 입력
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
    console.log('TitleValue: ', titleValue);
  }
  //비용에 입력
  const handlePaymentChange = (e) => {
    setPaymentValue(e.target.value);
    console.log('paymentValue: ', paymentValue);
  }
  //입력 버튼
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
  

  //체크 버튼
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
  //전체 삭제 버튼
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
                key={data.id}
                payList = {payList}
                titleValue = {titleValue}
                paymentValue = {paymentValue}
                id = {data.id}
                title = {data.titlePay}
                payment = {data.payment}
                completed = {data.completed}
                handleCheck = {handleCheck}
                handleEleRemove = {handleEleRemove}
                setPayList = {setPayList}
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
