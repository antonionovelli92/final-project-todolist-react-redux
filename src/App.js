import React from "react";
import { Route, Routes } from "react-router";
import TodoList from "./TodoList";
import TodoDetail from "./TodoDetail";
import Header from "./components/Header";
import "./style.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/detail/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
