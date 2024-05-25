import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos:[{id:"abc",task:"sleep",isDone:false}]
  },
  reducers: {
    addTodo:(state,action)=>{
        const newTodo={
            id:"def",
            task:payload.action,
            markasDone:false
        }
        state.todos.push(newTodo)

    },
    deleteTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!=action.payload)

    },
    markasDone:(state,action)=>{
        state.todos=state.todos.map((todo)=>{
            if (todo.id===action.payload){
                todo.isDone=true
            }

        })

    }
  }})

  export const { addTodo, deleteTodo, markasDone } = todoSlice.actions

  export default todoSlice.reducer
