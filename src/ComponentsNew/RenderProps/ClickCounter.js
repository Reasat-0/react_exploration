import React from 'react'


class ClickCounter extends React.Component{

    // state = {
    //     count : 0
    // }

    // handleEvent = () => {
    //     this.setState(
    //         (prevState) => (
    //             {
    //                 count : prevState.count + 1 
    //             }
    //         )
    //     )
    // }

    render(){
        return (
            <button onClick={this.props.handleEvent}>Clicked { this.props.count } times... </button>
        )
    }
}

export default ClickCounter