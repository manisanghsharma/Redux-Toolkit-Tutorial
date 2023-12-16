import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const todoStorage = JSON.parse(localStorage.getItem('savedstate'));


const initialState = {
	todos: todoStorage.todos || [],
    count: todoStorage.count || 0
}

const saveTodos = (list) => {
    localStorage.setItem('savedstate', JSON.stringify(list))
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo:(state, action) => {
            const todo = {
                id: nanoid(),
                item: action.payload,
                checked: false
            }
            state.todos.push(todo);
            state.count += 1;
            saveTodos(state);
        },
        deleteTodo: (state, action) => {
            const idx = state.todos.findIndex(
                (item) => item.id === action.payload
                );
                if (state.todos[idx].checked === false){
                    state.count -= 1;
                }
                state.todos = (state.todos).filter(todo => todo.id !== action.payload);
            
            
            saveTodos(state);
        },
        toggleCheck: (state, action) => {
            const idx = state.todos.findIndex(item => item.id === action.payload)
            state.todos[idx].checked = !state.todos[idx].checked;
            state.count = state.todos[idx].checked ? state.count-1 : state.count+1;
            saveTodos(state);
        }
    }

})

export const {addTodo, deleteTodo, toggleCheck} = todoSlice.actions;
export default todoSlice.reducer;