import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        this.increment = this.inc.bind(this)
        this.decrement = this.dec.bind(this)
    }
    inc(){
        this.setState({count:this.state.count + 1})
    }
    dec(){
        this.setState({count:this.state.count - 1})
    }
    render(){
        const {count} = this.state
        return(
            <>
                <h4>Count: {count}</h4>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
             </>    
        )
    }
}
export default Counter