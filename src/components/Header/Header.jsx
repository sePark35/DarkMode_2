import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
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
