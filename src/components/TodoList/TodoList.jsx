import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import style from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);

  // const handletFilter = () => {
  //   const filteredTodos = todos.filter((el) => el.status === filter);
  // };

  const filtered = getFilteredTodos(todos, filter);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => !(todo.id === deleted.id)));
  };

  const handleUpdate = (update) => {
    setTodos(todos.map((todo) => (todo.id === update.id ? update : todo)));
  };

  return (
    <section className={style.container}>
      <ul className={style.list}>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>
  );
}

const getFilteredTodos = (todos, filter) => {
  return todos.filter((el) =>
    filter === "all" ? todos : el.status === filter
  );
};
