import React , { Component} from 'react';
class Enemy extends Component{
    render (){
        const name = this.props
        return (
        <div>
            Enemy {name}
        </div>
        )
    }
}
export default Enemy;