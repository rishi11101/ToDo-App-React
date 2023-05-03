import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todos from './components/Todos';
import EditTodo from './components/EditTodo';

function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [todo, setTodo] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  //functions :-
  function addTodo(todoTask){
    //this will take one todo list value from todoForm component

    setTodo([...todo, { id: uuidv4(), task: todoTask, isEditing: false }])
  }

  //delete tasks
  function deleteTodo(todoId){
    setTodo(todo.filter(taskItem => taskItem.id !== todoId))
  }

  //edit and update the tasks
  function editTodo(todoId){
    setTodo(todo.map(taskItem => {
      if(taskItem.id === todoId){
        return {...taskItem, isEditing: !taskItem.isEditing}
      }
      else return taskItem
    }))
  }

  function editTodoTask(updatedTask, todoId){
    setTodo(todo.map( taskItem => {
      if(taskItem.id === todoId){
        return {...taskItem, task: updatedTask, isEditing: !taskItem.isEditing}
      }
      else return taskItem
    }))
  }

  //Mark tasks as completed by clicking on them (toggling)
  function toggleComplete(todoId){
    setTodo(todo.map( taskItem => {
      if(taskItem.id === todoId){
        return {...taskItem, completed: !taskItem.completed}
      }
      else return taskItem
    }))
  }

  return (
    <div>

      <Header/>
      <TodoForm addTodo={addTodo}/>
      
      {todo.map((taskItem, index) => (
        taskItem.isEditing ? (
          <EditTodo editTodoTask={editTodoTask} taskItem={taskItem}/>
        ) : 
        (
          <Todos taskItem={taskItem} key={index}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
        )
      ))}

    </div>
  );
}

export default App;