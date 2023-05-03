import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [todoVal, setTodoVal] = useState("")

    function submitHandler(event){
        event.preventDefault();

        addTodo(todoVal);

        setTodoVal("");
    }

    function changeHandler(event){
        setTodoVal(event.target.value)
    }

  return (
    <form className='flex justify-center my-8 gap-[0.7rem]' onSubmit={submitHandler}>
        <input className="shadow appearance-none border rounded sm:w-[30%] py-2 px-3 text-gray-700 focus:outline-none"
            type='text'
            placeholder='Enter your task here...'
            onChange={changeHandler}
            value={todoVal}
        />

        <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold px-4 rounded'
         type='submit'>Add</button>
    </form>
  )
}

export default TodoForm