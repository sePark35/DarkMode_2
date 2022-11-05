import React from "react";
import { BsTrash } from "react-icons/bs";
import style from "./Todo.module.css";

export default function ({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;

  const handleChange = (e) => {
    //status 값을 이벤트로 받아와서 업데티 해준다
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  //데이터 자체를 넘길 수 있다
  const handleDelete = () => onDelete(todo);

  return (
    <li className={style.todo}>
      <input
        className={style.checkbox}
        id={id}
        type="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={style.text} htmlFor={id}>
        {text}
      </label>
      <span className={style.icon}>
        <button className={style.button} onClick={handleDelete}>
          <BsTrash />
        </button>
      </span>
    </li>
  );
}
