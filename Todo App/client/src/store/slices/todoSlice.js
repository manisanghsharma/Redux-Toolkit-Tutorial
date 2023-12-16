import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const todoStorage = JSON.parse(localStorage.getItem('todos')) || [];


const initialState = {
	todos: todoStorage,
    count: 0
}

const saveTodos = (list) => {
    localStorage.setItem('todos', JSON.stringify(list))
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
            saveTodos(state.todos);
        },
        deleteTodo: (state, action) => {
            state.todos = (state.todos).filter(todo => todo.id !== action.payload);
            saveTodos(state.todos);
            state.count += 0;
        },
        toggleCheck: (state, action) => {
            const idx = state.todos.findIndex(item => item.id === action.payload)
            state.todos[idx].checked = !state.todos[idx].checked;
            state.count = state.todos[idx].checked ? state.count-1 : state.count+1;
            // state.todos = (state.todos).map(todo => (todo.id === action.payload ? {...todo, checked: !todo.checked} : todo))
            saveTodos(state.todos);
        }
    }

})

export const {addTodo, deleteTodo, toggleCheck} = todoSlice.actions;
export default todoSlice.reducer;