import React, { Component } from "react";
import "./font-awesome/css/font-awesome.css";
import Navbar from "./components/Layout/Navbar";
import SubmitForm from "./components/Layout/SubmitForm";
import NotCompleted from "./components/Tasks/NotCompleted";
import CompletedTasks from "./components/Tasks/CompletedTasks";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

export default class App extends Component {
  state = {
    tasks: [],
  };

  //Add Task
  addTask = (text) => {
    const newTask = {
      id: uuidv4(),
      title: text,
      completed: false,
    };

    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  //Delete Task
  deleteTask = (id) => {
    this.setState({
      tasks: [...this.state.tasks.filter((task) => task.id !== id)],
    });
  };

  toggleCompleted = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      }),
    });
  };

  render() {
    return (
      <main>
        <Navbar></Navbar>
        <SubmitForm addTask={this.addTask}></SubmitForm>
        <div className="wrapper">
          <NotCompleted
            tasks={this.state.tasks}
            toggleCompleted={this.toggleCompleted}
          ></NotCompleted>
          <CompletedTasks
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
          ></CompletedTasks>
        </div>
      </main>
    );
  }
}
