import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (todo != '') {
      setTodos([...todos, todo])
      setTodo('')
    }
    console.log(todos)    
  }

  const deleteTodo = (text) => {
    const newsTodos = todos.filter((todo) => {
      return todo !== text
    });
    setTodos(newsTodos)
  }

  return (
    <>
      <div className='main'>
        <h1>React Todo App</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} remove={deleteTodo} />
      </div>
    </>
  )
}

export default App
