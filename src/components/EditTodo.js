// When the user clicks the "Edit" button, the flag is toggled to true and the corresponding task 
// is rendered using the "EditTodo" component instead of the "Todos" component. The "EditTodo" 
// component contains a form that allows the user to update the task text. When the user submits 
// the form, the "editTodoTask" function is called with the updated task text and the ID of the task 
// being edited. This function updates the state of the "todo" array with the new task text and 
// toggles the "isEditing" flag back to false. This causes the app to render the updated task using 
// the "Todos" component again.
// EditTodo is similar to TodoForm component, just it uses updated task value

import React, { useState } from 'react'

const EditTodo = ({ taskItem, editTodoTask }) => {
    const [todoVal, setTodoVal] = useState(taskItem.task)

    function submitHandler(event){
        event.preventDefault();

        editTodoTask(todoVal, taskItem.id);

        setTodoVal("");
    }

    function changeHandler(event){
        setTodoVal(event.target.value)
    }

  return (
    <form className='flex justify-center my-8 gap-[0.7rem]' onSubmit={submitHandler}>
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded sm:w-[26%] py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500'
            type='text'
            placeholder='Update task...'
            onChange={changeHandler}
            value={todoVal}
        />

        <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded'
         type='submit'>Update</button>
    </form>
  )
}

export default EditTodo