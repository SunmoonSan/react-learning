import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  /**
   * 状态在哪里, 操作状态的方法就在哪里
   */

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

  // 更新一个todo对象
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done }
      }
      return todo
    })

    this.setState({
      todos: newTodos
    })
  }

  // 删除一个todo对象
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: newTodos
    })
  }

  // 用于全选/全不选
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      return { ...todo, done }
    })

    this.setState({
      todos: newTodos
    })
  }

  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return !todo.done
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    );
  }
}
