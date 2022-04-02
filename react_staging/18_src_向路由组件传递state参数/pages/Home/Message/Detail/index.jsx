import React, {Component} from 'react';

const DetailData = [
    {id: '01', content: '你好，中国'},
    {id: '02', content: '你好，尚硅谷'},
    {id: '03', content: '你好，未来的自己'}
]

export default class Detail extends Component {

    render() {
        console.log(this.props)
        // 接收params参数
        // const {id, title} = this.props.match.params
        // const result = DetailData.find(obj => {
        //     return obj.id === id
        // })

        // 接收search参数
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search.slice(1))
        // const result = DetailData.find(obj => {
        //     return obj.id === id
        // })

        // 接收state参数
        const {id, title} = this.props.location.state
        const result = DetailData.find(obj => {
            return obj.id === id
        })

        return (
            <div>
                <ul>
                    <li>ID: {id}</li>
                    <li>TITLE: {title}</li>
                    <li>CONTENT: {result.content}</li>
                </ul>
            </div>
        );
    }
};
