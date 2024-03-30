import React from 'react'
import TodosList from './components/TodosList'
import AddTodo from './components/AddTodo'

const App = () => {
  return (
    <>
      <AddTodo/>
      <TodosList/>
    </>
  )
}

export default App