import React , { Component} from 'react';

class Hero extends Component{
    render (){
        const name = this.props
        return (
        <div>
            Hero {name} 
        </div>
        )
    }
}
export default Hero;