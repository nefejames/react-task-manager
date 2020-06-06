import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

const NotCompleted = (props) => {
  return (
    <section className="container undone-tasks">
      <h2>Tasks</h2>
      {props.tasks.map((task) => (
        <Task
          key={task.title}
          task={task}
          toggleCompleted={props.toggleCompleted}
        ></Task>
      ))}
    </section>
  );
};

NotCompleted.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default NotCompleted;
