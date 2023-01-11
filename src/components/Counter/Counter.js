import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment(){
        this.setState({count:this.state.count + 1})
    }
    decrement(){
        this.setState({count:this.state.count - 1})
    }
    render(){
        const {count} = this.state
        return(
            <>
                <h4>Count: {count}</h4>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
             </>    
        )
    }
}
export default Counter