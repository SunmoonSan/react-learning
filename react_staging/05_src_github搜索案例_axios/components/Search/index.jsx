import React, {Component} from 'react';
import axios from 'axios'


export default class Search extends Component {

    search = () => {
        const {keyWordElement: {value}} = this

        // 发送请求前更新App状态
        this.props.updateAppState({
            isFirst: false,
            isLoading: true
        })

        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(resp => {
            //请求成功后，通知App更新状态
            this.props.updateAppState({
                isLoading: false,
                users: resp.data.items
            })
        }, error => {
            // 请求失败后， 通知App更新状态
            this.props.updateAppState({
                isLoading: false,
                err: error.message
            })
        })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词，点击搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
};
