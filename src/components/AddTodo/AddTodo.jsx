import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //trim은 text 자체를 수정한다
    if (text.trim().length === 0) {
      return;
    }
    onAdd({
      id: uuidv4(),
      text: text,
      status: "active",
    });
    setText("");
  };
  return (
    //버튼에 따로 이벤트를 주지 않아도 된다!
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      ></input>
      <button className={style.button}>Add</button>
    </form>
  );
}
