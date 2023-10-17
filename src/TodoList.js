import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, completeTask, removeTask, removeAllTask } from "./taskSlice";
import { Link } from "react-router-dom";
import TaskFilter from "./components/TaskFilter";
import CustomButton from "./components/CustomButton";

function TodoList() {
  //! ****** Estraggo lo stato dei task dallo store(taskSlice)*****
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState(""); // State per il nuovo task
  const [filterText, setFilterText] = useState(""); // Nuova variabile di stato per il filtro

  // ? ****** Gestione eventi ******

  // ! Aggiungo un task
  const handleAddTask = () => {
    if (newTask) {
      dispatch(addTask(newTask));
      setNewTask(""); // Resetta l'input dopo l'aggiunta
    }
  };

  // ! Task completato
  const handleCompleteTask = (id) => {
    dispatch(completeTask(id));
  };

  // ! Rimuovo un task
  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  //  ! Rimuovo TUTTI i task
  const handleRemoveAllTask = () => {
    dispatch(removeAllTask());
  };

  // TODO filtraggio task*******
  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  return (
    <div>
      {/* ********PARTE SUPERIORE, TITOLO E BOTTONE 'DELETE ALL'******** */}
      <div className="d-flex justify-content-between mb-3">
        <h2>Cose da fare:</h2>
        <CustomButton
          className="btn btn-sm btn-danger shadow rounded-5 border border-2 border-success-subtle"
          text="Delete All"
          onClick={() => handleRemoveAllTask()}
        />
      </div>
      {/* filtro task**** */}
      <div>
        <TaskFilter onFilterChange={handleFilterChange} />
      </div>
      {/* ********PARTE INFERIORE, LISTA TASK E INPUT******** */}
      <ul
        className="list-group rounded-5 p-3 bg-warning bg-gradient shadow border border-5 border-success-subtle"
        // TODO: test scrollbar
        // style={{
        //   height: "400px",
        //   overflowY: "scroll",
        //   scrollbarWidth: "thin",
        //   scrollbarColor: "transparent transparent",
        // }}
      >
        {tasks
          .filter((task) => task.text.includes(filterText)) // Filtra i task in base al testo
          .map((task) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center p-3 mb-2 bg-primary bg-gradient shadow  text-white"
              key={task.id}
            >
              <Link
                className="text-decoration-none text-reset  font-monospace"
                to={`/detail/${task.id}`}
                style={{ textTransform: "capitalize" }}
              >
                {task.text}
              </Link>
              <div className="d-flex align-items-center">
                <span
                  className={`badge rounded-pill mx-5 ${
                    task.completed
                      ? "bg-warning text-black shadow border border-black"
                      : "bg-danger shadow border border-white"
                  }`}
                >
                  {task.completed ? "Fatto" : "Da fare"}
                </span>
                <CustomButton
                  text="V"
                  className="btn btn-sm btn-success ml-2 mx-2  border border-white shadow"
                  onClick={() => handleCompleteTask(task.id)}
                />
                <CustomButton
                  text="X"
                  className="btn btn-sm btn-danger border border-white shadow"
                  onClick={() => handleRemoveTask(task.id)}
                />
              </div>
            </li>
          ))}
      </ul>

      {/* ********INPUT PER AGGIUNGERE UN TASK******** */}
      <div className="d-flex justify-content-center mt-5">
        <input
          type="text"
          placeholder="Add task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          // All'invio con il tatso enter, aggiungi il task
          onKeyUpCapture={(e) => {
            if (e.key === "Enter") {
              handleAddTask();
            }
          }}
          className="form-control w-50 rounded-pill shadow"
        />
        {/* <button onClick={handleAddTask}>+</button> */}
      </div>
      {/* <div className="d-flex justify-content-center mt-3"></div> */}
    </div>
  );
}

export default TodoList;
