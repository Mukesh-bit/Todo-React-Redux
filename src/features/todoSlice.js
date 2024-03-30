import { createSlice, nanoid } from "@reduxjs/toolkit";

// this is a initial state
const initialState = {
  todos: []
}

// In redux toolkit we have to make a slice where we can manage our function
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    // This function is used to add the input value in list
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },

    // This function is used to remove the items in todo list
    deleteTodo: (state, action) => {
     state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }

})


// we have to export all the reducers 
export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer