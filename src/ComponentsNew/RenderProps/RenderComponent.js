import React from 'react'


import ClickCounter from './ClickCounter'

class RenderComponent extends React.Component{

    state = {
        count : 0
    }

    handleEvent = () => {
        this.setState(
            (prevState) => (
                {
                    count : prevState.count + 1 
                }
            )
        )
    }

    render(){

        const {render} = this.props
        const {count} = this.state
        return (
            render(count,this.handleEvent)
        )
    }
}

export default RenderComponent