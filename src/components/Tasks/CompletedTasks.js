import React from "react";
import PropTypes from "prop-types";

export const CompletedTasks = (props) => {
  return (
    <section className="container completed-tasks">
      <h2>Completed</h2>
      <ul>
        {props.tasks.map((task) => {
          return !task.completed ? null : (
            <li key={task.title}>
              {task.title}
              <i
                className="fa fa-close"
                onClick={props.deleteTask.bind(this, task.id)}
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

CompletedTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default CompletedTasks;
