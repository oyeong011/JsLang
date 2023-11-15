import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
const List = ({
    title,
    id,
    payment,
    completed,
    handleCheck,
    handleEleRemove,
    setPayList,
    payList
}) => {
    const [isEditing, setIsEditing] = useState(false);

    const [titleReWrite, setTitleReWrite] = useState(title)
    const [PaymentReWrite, setPaymentReWrite] = useState(payment)
    //수정 버튼
    
    const handleTitleReWrite = (e) => {
        setTitleReWrite(e.target.value)
    };
    const handlePayReWrite = (e) => {
        setPaymentReWrite(e.target.value);
    }
    const handleReWriteSubmit = () => {
        const newPayList = payList.map((data) => {
            if (data.id === id) {
                return { ...data, titlePay: titleReWrite, payment: PaymentReWrite };
            }
            return data;
        });
    
        setPayList(newPayList);
        localStorage.setItem("payList", JSON.stringify(newPayList));
        setIsEditing(false);
    }
    if(isEditing){
        return(
            <div className="flex justify-around border-2" key={id}>
                <input
                    className="flex-grow-1"
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleCheck(id)}
                />
                <input
                    className={`ml-10 flex-grow ${completed ? "line-through" : undefined}`}
                    value={titleReWrite}
                    onChange={handleTitleReWrite}
                >
                </input>
                <input
                    className="flex-grow"
                    value={PaymentReWrite}
                    onChange={handlePayReWrite}
                >
                </input>
                <button className="flex-none mr-10" onClick={handleReWriteSubmit}>
                    <FaPen/>
                </button>
            </div>
        )
    } else {
        return (
            <div className="flex justify-around border-2" key={id}>
                <input
                    className="flex-grow-1"
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleCheck(id)}
                />
                <div
                    className={`ml-10 flex-grow ${completed ? "line-through" : undefined}`}
                >
                    {title}
                </div>
                <div className="flex-grow">{payment}</div>
                <button className="flex-none mr-10">
                    <FaPen onClick={() => setIsEditing(true)} />
                </button>
                <button className="flex-none mr-10">
                    <FaRegTrashCan onClick={() => handleEleRemove(id)} />
                </button>
            </div>
        );
    }
    
    
    
};

export default List;
