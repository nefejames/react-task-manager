import React from "react";
import PropTypes from "prop-types";

const Tasks = ({ task, toggleCompleted }) => {
  if (task.completed) return null;
  return (
    <ul>
      <li>
        {task.title}{" "}
        <i
          className="fa fa-check"
          onClick={toggleCompleted.bind(this, task.id)}
        ></i>
      </li>
    </ul>
  );
};

Tasks.propTypes = {
  task: PropTypes.object.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
};

export default Tasks;
