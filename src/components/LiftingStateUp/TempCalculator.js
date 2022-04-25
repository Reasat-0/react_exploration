import React from "react";
import TemperatureInput from "./TemperatureInput";
import ResultShower from './ResultShower'
import { toCelcius, toFarhenheit, converter } from './Utils/converter'


class TempCalculator extends React.Component{
    state = {
        scale : "c",
        temperature : ""
    }

    handleChange = (e,scale) => {
        this.setState({
            temperature : e.target.value,
            scale
        })
    }
    render() {
        const {temperature, scale} = this.state

        const celcius = scale === 'f' ? converter( temperature, toCelcius) : temperature
        const farhenheit = scale === 'c' ? converter( temperature, toFarhenheit) : temperature
        return(
            <>
                <TemperatureInput 
                    scale="c" 
                    temperature={celcius} 
                    handleTempChange={this.handleChange}/>
                <br/>
                <TemperatureInput 
                    scale="f"
                    temperature={farhenheit}
                    handleTempChange={this.handleChange}
                />

                <ResultShower temperature={celcius} />
            </>
        )
    }
}

export default TempCalculator