import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {

  // 对接收的prop进行类型, 必要性限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 键盘事件的回调
  handleKeyUp = (event) => {
    // 解构赋值
    const { keyCode, target } = event;

    // 获取回车按键
    if (keyCode !== 13) {
      return;
    }

    // 添加不能为空
    if (target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }

    // 创建一个todo对象
    const todo = {
      id: nanoid(),
      name: target.value,
      done: false,
    };

    // 添加一个todo
    this.props.addTodo(todo);

    // 清空输入框
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务， 按回车键确认"
        />
      </div>
    );
  }
}
