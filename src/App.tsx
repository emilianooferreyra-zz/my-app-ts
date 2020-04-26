import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

type FormElement = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

function App() {
  const [value, setValue] = useState<string>('')
  const [todos, setTodo] = useState<ITodo[]>([])

  const handleSubmit = (event: FormElement): void => {
    event.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodo(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos
    newTodos[index].complete = !newTodos[index].complete
    setTodo(newTodos)
  }

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => (
          <>
            <div key={index}>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>
              {' '}
              {todo.complete ? 'Incomplete' : 'Complete'}{' '}
            </button>
          </>
        ))}
      </section>
    </>
  )
}

export default App;
