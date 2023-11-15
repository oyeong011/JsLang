import React, { useState } from "react";

const List = React.memo((
    {id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick}
) => {
  

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData))
  };

  const handleEditingChange = (e) => {
    setEditedTitle(e.target.value)
  }

  const handleSubmit = () => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id){
        data.title = editedTitle;
      }
      return data;
    })
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData))
    setIsEditing(false);
  }


  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  
  if(isEditing){
      return (
        <div
          className={`flex items-center justify-between w-full px-4 py-1 m-2 text-gray-600 bg-gray-100 border rounded `}
        >
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                value={editedTitle}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                onChange={handleEditingChange}
                autoFocus
              />
            </form>
          </div>
          <div className="items-center">
            <button className="float-right px-4 py-2" onClick={() => setIsEditing(false)}>
              x
            </button>
            <button onClick={handleSubmit} className="float-right px-4 py-2">
              save
            </button>
          </div>
        </div>
      );    
  } else {
    
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
        } flex items-center justify-between w-full px-4 py-1 m-2 text-gray-600 bg-gray-100 border rounded `}
      >
        <div className="items-center">
          <input
            type="checkbox"
            onChange={() => handleCompleChange(id)}
            defaultChecked={completed}
          />{" "}
          <span className={completed ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <div className="items-center">
          <button className="float-right px-4 py-2" onClick={() => handleClick(id)}>
            x
          </button>
          <button className="float-right px-4 py-2" onClick={() => setIsEditing(true)}>
            edit
          </button>
        </div>
      </div>
    );
  }
  
});

export default List;
