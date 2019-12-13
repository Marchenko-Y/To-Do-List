import React from "react";
import styles from "./AddTaskForm.module.css";

export const Input = ({ input, meta, ...props }) => {
  return (
    <div
      className={`${styles.formControl}  ${
        meta.error && meta.touched ? styles.error : ""
      }`}
    >
      <input {...input} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};
