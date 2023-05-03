import React from 'react'

const Todos = ({ taskItem, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className='flex flex-col sm:flex-row gap-2 justify-between mx-auto sm:w-[34%] my-4'>

        <p onClick={() => toggleComplete(taskItem.id)}
        className={`${taskItem.completed ? 'line-through w-[100%] bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700' : 
        'w-[97vw] mx-auto bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700'}`}>

        {taskItem.task}
        </p>

        <div className='flex gap-4 w-[95vw] mx-auto sm:w-[25%]'>
            <button className= {`${taskItem.completed ? 'hidden' : 
            'shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 py-[0.2rem] rounded'}`}
            onClick={ () => editTodo(taskItem.id) }>Edit</button>

            <button className='shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 py-[0.2rem] rounded'
            onClick={ () => deleteTodo(taskItem.id) }>Delete</button>
        </div>
    </div>
  )
}

export default Todos

{/* here: taskItem is one todo list item, and task is property of the object having task name */}