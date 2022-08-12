import React from "react"


import Bulb from './UniqueComponents/Bulb'
import Fan from './UniqueComponents/Fan'

class RenderProps extends React.Component{
    state = {
        turnedOn : false,
        bill : 0
    }
    turnOnOff = () => {
        this.setState( (prev) => ( {
            turnedOn : !prev.turnedOn,
            bill: prev.bill + 1
        } ))
    }
    render(){
        const {render} =this.props
        const {turnedOn,bill} = this.state
        return(
            render(bill,turnedOn, this.turnOnOff)
        )
    }
}

export default RenderProps;