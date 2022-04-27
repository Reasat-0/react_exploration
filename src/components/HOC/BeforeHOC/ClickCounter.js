import React from "react";


export default class ClickCounter extends React.Component{
    state = {
        count : 0
    }

    incrementCounter = () => {
        this.setState( (prev) => ({
            count : prev.count + 1
        }))
    }

    render(){
        const {count } = this.state;
        return(
            <button type="button" onClick={this.incrementCounter}> Clicked {count} times </button>
        )
    }
}