import React, { Component } from 'react'
import Utils from '../../utils'
class CardList extends Component {
    componentDidMount() {
        this.getMenuAPIList(this.props.keyword)
    }
    getMenuAPIList(keyword) {
        const num = 12
        Utils.getJson({
            url: `/recipe/search?keyword=${keyword}&num=${num}&appkey=9d1f6ec2fd2463f7`,
            success: (data) => {
                // this.setState()
                console.log(data)
            }
        })
    }
    render() {
        return (
            <div>CardList</div>
        )
    }
}
export default CardList