import React, {Component} from 'react';
import './index.css'


export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键词，随后点击搜索</h2> :
                        isLoading ? <h1>Loading...</h1> :
                            err ? <h2>{err}</h2> :
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
