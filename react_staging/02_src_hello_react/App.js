import React from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

// 创建‘外壳’组件APP, 并暴露
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
