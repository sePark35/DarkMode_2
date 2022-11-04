import React from "react";
import { BsTrash } from "react-icons/bs";

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
    <li>
      <input
        id={id}
        type="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={handleDelete}>
        <BsTrash />
      </button>
    </li>
  );
}
