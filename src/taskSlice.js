import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      //! Genero un nuovo ID per il task, con un ternario  *******
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;

      //! Creo un nuovo task con ID, testo e stato iniziale "Da fare" quindi falso
      const newT = {
        id,
        text: action.payload, // Il testo del nuovo task viene dall'azionee
        completed: false, // Inizialmente, il task è non completato
      };

      //! Aggiungo il nuovo task all'array dello stato
      state.push(newT);
    },

    completeTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
    removeTask: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    removeAllTask: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addTask, completeTask, removeTask, removeAllTask } =
  taskSlice.actions;

export default taskSlice.reducer;
