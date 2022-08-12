import React from 'react'


const withCounter = (MainComponent) => {
    class NewComponent extends React.Component{
        state = {
            count: 0
        }

        handleCounter = () => {
            this.setState((prev) => (
                {count: prev.count + 1}
            ))
        }

        render(){

            const {count} = this.state
            
            return(
                <MainComponent
                    count={count}
                    handleCounter = {this.handleCounter}
                />
            )
        }
    }

    return NewComponent
}

export default withCounter;