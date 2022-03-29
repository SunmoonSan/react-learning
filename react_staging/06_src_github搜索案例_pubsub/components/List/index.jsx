import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.css'


export default class List extends Component {

    state = {
        users: [], // 初始化状态
        isFirst: true, // 时候为第一次打开页面
        isLoading: false,
        err: '' // 存储存储相关的错误信息
    }

    componentDidMount() {
        this.token = PubSub.subscribe("atguigu", (msg, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键词，随后点击搜索</h2> :
                        isLoading ? <h1>Loading...</h1> :
                            err ? <h2>...</h2> :
                                users.map(user => {
                                    return (
                                        <div className="card" key={user.id}>
                                            <a rel="noopener noreferrer" href={user.html_url} target="_blank">
                                                <img alt="avatar" src={user.avatar_url} style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
};
