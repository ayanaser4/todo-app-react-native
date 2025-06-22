// redux/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",                // ← This becomes the key in state: `state.tasks`
  initialState: [],            // ← This is the array of todos
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action) => { state.push(action.payload); },
    deleteTask: (state, action) => state.filter(task => task.id !== action.payload),
    toggleTaskComplete: (state, action) =>
      state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      ),
  },
});

export const { setTasks, addTask, deleteTask, toggleTaskComplete } = taskSlice.actions;
export default taskSlice.reducer;
