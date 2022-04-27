
import React from "react"

const withCounter = (OriginalComponent) => {


    class NewComponent extends React.Component{

        state = {
            count : 0
        }
    
        incrementCounter = () => {
            this.setState( (prev) => ({
                count : prev.count + 1
            }))
        }
    
        render(){
            return(
                <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter}/>
            )
        }
    }

    return NewComponent;
}


export default withCounter