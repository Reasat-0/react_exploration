import React from 'react'


class HoverCounter extends React.Component{

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
            <h1 onMouseOver={this.props.handleEvent}> Hovered { this.props.count } times... </h1>
        )
    }
}

export default HoverCounter