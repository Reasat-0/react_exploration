
import React from 'react'

import BoilingVerdict  from './BoilingVerdict'
import TemparatureInput from './TemperatureInput'


import {converter, toCel, toFar} from './Converter'

class TemperatureCalculator extends React.Component{
    
    state = {
        temperature : "",
        active_scale : ""
    }

    onTempChange = (e, scale) => {
        this.setState({
            temperature : e.target.value,
            active_scale : scale
        })
    }

    render(){

        const {temperature , active_scale} = this.state;

        
        
        const celcius = active_scale === 'f' ? converter(temperature, toCel) : temperature;
        const farhenheit = active_scale === 'c' ? converter(temperature, toFar) : temperature;
        
        return(
            // <fieldset>
            
            //     <legend>
            //         Enter Temparature In Celcius...
            //     </legend>

            //     <input type="text" value={temperature} onChange={this.onTempChange}/>

            //     <BoilingVerdict celcTemperature={parseFloat(temperature)}/>            
            // </fieldset>

            <>
            
                <TemparatureInput 
                    scale={'c'} 
                    tempValue={celcius} 
                    onTempChange = {this.onTempChange}
                />


                <TemparatureInput 
                    scale={'f'} 
                    tempValue={farhenheit} 
                    onTempChange = {this.onTempChange }
                />
                
            
            </>


        )
    }

}

export default TemperatureCalculator;