import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
	todos: JSON.parse(localStorage.getItem("savedstate")) || [],
};

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
            saveTodos(state.todos);
        },
        deleteTodo: (state, action) => {
            state.todos = (state.todos).filter(todo => todo.id !== action.payload);
            saveTodos(state.todos);
        },
        toggleCheck: (state, action) => {
            state.todos = state.todos.map(x => x.id === action.payload ? {...x, checked: !x.checked} : x)
            saveTodos(state.todos);
        }
    }

})

export const {addTodo, deleteTodo, toggleCheck} = todoSlice.actions;
export default todoSlice.reducer;