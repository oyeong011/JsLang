import React from 'react'
import { DragDropContext , Droppable, Draggable} from "react-beautiful-dnd"
import List from './List';



const Lists = ({todoData ,setTodoData, handleClick}) => {
    const handleEnd = (result) => {
        console.log('result: ', result);
        if(!result.destination) return;

        const newTodoData = todoData;

        //1.변경되는 아이템을 배열에서 지움
        //2. 지워진 아이템을 저장
        const [reorderedItem] = newTodoData.splice(result.source.index, 1)
        //착륙지점에 지워진 아이템을 옮김
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData)
        localStorage.setItem("todoData", JSON.stringify(newTodoData))
    }
    return (
        /* map을 이용해서 요소 자동 생성 및 클래스로 동적 생성 */
        
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId='todo'>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {todoData.map((data, index)=>(
                            <Draggable
                                key = {data.id} 
                                draggableId={data.id.toString()}
                                index={index}
                            >
                                {(provided, snapshot) => ( 
                                    <List
                                        key={data.id}
                                        id={data.id}
                                        title={data.title}
                                        completed={data.completed}
                                        todoData={todoData}
                                        setTodoData={setTodoData}
                                        provided={provided}
                                        snapshot={snapshot}
                                        handleClick={handleClick}
                                    />
                                    
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default Lists