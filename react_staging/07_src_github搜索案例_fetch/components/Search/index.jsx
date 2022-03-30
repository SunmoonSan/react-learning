import React, {Component} from 'react';
import PubSub from "pubsub-js";


export default class Search extends Component {

    search = async () => {
        const {keyWordElement: {value}} = this
        PubSub.publish('atguigu', {isFirst: false, isLoading: true})
        // 发送网络请求
        // axios.get(`https://api.github.com/search/users?q=${value}`).then(resp => {
        //     //请求成功后，通知App更新状态
        //     PubSub.publish("atguigu", {
        //         isLoading: false,
        //         users: resp.data.items
        //     })
        // }, error => {
        //     // 请求失败后， 通知App更新状态
        //     PubSub.publish("atguigu", {
        //         isLoading: false,
        //         err: error.message
        //     })
        // })

        // fetch(`https://api.github.com/search/users?q=${value}`)
        //     .then(resp => {
        //         return resp.json()
        //     })
        //     .then(resp => {
        //         console.log(resp)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        try {
            const resp = await fetch(`https://api.github.com/search/users?q=${value}`)
            const data = await resp.json()
            console.log(data)
            PubSub.publish("atguigu", {
                isLoading: false,
                users: data.items
            })
        } catch (error) {
            PubSub.publish('atguigu', {
                isLoading: false,
                err: error.message
            })
        }
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
