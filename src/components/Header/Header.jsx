import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiSun />}
        {darkMode && <HiMoon />}
      </button>
      <ul className={styles.filters}>
        {filters.map((el, idx) => (
          <li key={idx}>
            <button
              onClick={() => onFilterChange(el)}
              className={`${styles.filter} ${
                filter === el && styles.selected
              } `}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
