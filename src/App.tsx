import React, { Fragment, useState } from 'react'
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
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodo(newTodos)
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodo(newTodos)
  }

  return (
    <div style={{ textAlign: "center" }}>
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
          <Fragment key={index}>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>
              {' '}
              {todo.complete ? 'Incomplete' : 'Complete'}{' '}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>&times;</button>
          </Fragment>
        ))}
      </section>
    </div>
  )
}

export default App;
