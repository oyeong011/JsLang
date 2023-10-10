import { useState, useTransition, useDeferredValue } from "react";

let a = new Array(10000).fill(0)

function Ex(){
    let [name, setName] = useState('')
    let [isPending ,startTransition] = useTransition()

    return (
        <div className="App">
            <input onChange={(e)=>{
            startTransition(()=>{
                setName(e.target.value)
            })}}/>
            {
                isPending ? '로딩중' :
                a.map(()=>{
                    return <div>{name}</div>
                })
            } 
        </div>
    )
}