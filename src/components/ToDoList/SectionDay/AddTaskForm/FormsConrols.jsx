import React from "react";
import "./AddTaskForm.css";

export const Input = ({ input, meta, ...props }) => {
  return (
    <div className={`formControl ${meta.error && meta.touched ? "error" : ""}`}>
      <input {...input} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};
