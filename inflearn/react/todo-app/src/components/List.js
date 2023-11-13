import React from 'react'

export default function List({todoData ,setTodoData}) {

    let btnStyle = {
        background : "black",
        color : "#AAA",
        border : "none",
        padding : "5px 9px",
        borderRadius : "50%",
        cursor : "pointer",
        float : "right"
    }

    const getStyle = (completed) => {
        return{
        padding : "10px",
        borderBottom : "1px #ccc dotted",
        textDecoration : completed ?  "line-through" : "none"
        };
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id)
        setTodoData(newTodoData)
    }

    const handleCompleChange = (id) => {
        let newTodoData = todoData.map((data) => {
        if(data.id === id){
            data.completed = !data.completed;
        }
        return data;
        });
        setTodoData(newTodoData);
    }

    return (
        /* map을 이용해서 요소 자동 생성 및 클래스로 동적 생성 */
        <div>
            {todoData.map((data)=>(
                <div style={getStyle(data.completed)} key={data.id}>
                <input
                    type="checkbox"
                    onChange={() => handleCompleChange(data.id)}
                    defaultChecked={data.completed}
                />
                {" "}{data.title}
                <button
                    style={btnStyle}
                    onClick={() => handleClick(data.id)}
                >
                    x
                </button>
                </div>
            ))}
        </div>
    );
}
