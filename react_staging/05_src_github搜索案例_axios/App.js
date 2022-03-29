import React, {Component} from "react";
import './components/List/index.css'
import Search from "./components/Search";
import List from "./components/List";


export default class App extends Component {

    state = {
        users: [], // 初始化状态
        isFirst: true, // 时候为第一次打开页面
        isLoading: false,
        err: '' // 存储存储相关的错误信息
    }

    // 更新App的状态
    updateAppState = (state) => {
        this.setState(state)
    }

    render() {
        // const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                {/*<List users={users} isFirst={isFirst} isLoading={isLoading} err={err}/>*/}
                <List {...this.state}/>
            </div>
        )
    }
}
