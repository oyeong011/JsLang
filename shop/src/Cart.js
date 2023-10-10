import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, deleteRow, plus } from './store';
import { memo, useMemo, useState } from 'react';

function 함수(){
    
}

let Child = memo(function (){
    console.log("재핸더링됨")
    return <div>자식임</div>
})

function Cart(){

    //let result = useMemo(()=>{return 함수()}, [state])
    let a = useSelector((state)=>{return state})
    let dispatch = useDispatch()
    let [count, setCount] = useState(0)

    console.log('a.shoppingList: ', a.shoppingList);
    return(
        <div>
    <Child count={count}/>
    <Table striped="columns">
    <thead>
    <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경하기</th>
    </tr>
    </thead>
    <tbody>
        {
            a.shoppingList.map((list,i)=>
                <tr key={i}>
                    <td>{list.id}</td>
                    <td>{list.name}</td>
                    <td>{list.count}</td>
                    <td>
                        <button onClick={()=>{
                            dispatch(plus(list.name))
                        }}>+</button>
                    </td>
                    <td>
                        <button onClick={()=>{
                            dispatch(deleteRow(list.name))
                        }}>삭제</button>
                    </td>
                </tr>
    )
        }
    </tbody>
    </Table>
        </div>
    )
}
export default Cart