import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "写代码", done: false },
      { id: "004", name: "逛街", done: false },
    ],
  };

  // 用于添加一个todo对象
  addTodo = (todo) => {
    console.log(todo);
    const { todos } = this.state;
    const newTodos = [todo, ...todos];
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
