import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export type TodoItem = {
    id: string;
    dets: string;
}


const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

interface TodoState {
    value: TodoItem[]
}

const initialState: TodoState = {
    value:  storedTodos,
}

export const todoSlice = createSlice({
     name: "Todo",
    initialState,
    reducers: {
       addTodo: (state, action: PayloadAction<TodoItem>) => {
        state.value.push(action.payload);
        localStorage.setItem("todos", JSON.stringify(state.value))
       },
       deleteTodo: (state, action: PayloadAction<string> ) => {
        const updatedState = state.value.filter((todo) => todo.id !== action.payload);
        state.value = updatedState;
        localStorage.setItem("todos", JSON.stringify(updatedState));
       },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;