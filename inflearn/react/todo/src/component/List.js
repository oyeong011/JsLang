import React from 'react'

const List = ({
    payList,
    title,
    id,
    payment,
    completed,
    handleCheck
    }
) => {

    return (
        <div className='flex justify-around border-2' key={id}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => handleCheck(id)}
            />
            <input
                type="text"
                value={title}
            />
            <input
                type="text"
                value={payment}
            />
            <button></button>
            <button></button>
        </div>
    )
}

export default List