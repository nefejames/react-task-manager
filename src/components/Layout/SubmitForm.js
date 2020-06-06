import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.text);
    this.state.text = "";
  };

  onChange = (e) => this.setState({ text: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="search"
          placeholder="add task..."
          value={this.state.text}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default Search;
