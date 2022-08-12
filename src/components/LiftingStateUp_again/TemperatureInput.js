import React from 'react'

const scaleNames = {
    c : 'Celcius',
    f : 'Farhenheit'
}
const TemparatureInput = (props) =>{



    // state = {
    //     temperature : ""
    // }

    // onTempChange = (e) => {
    //     this.setState({
    //         temperature : e.target.value
    //     })
    // }

        // const {temperature} = this.state;
        const {scale , tempValue , onTempChange} = props;

        return (
            <fieldset>    
                <legend>
                    Enter Temparature In {scaleNames[scale]}
                </legend>
    
                <input type="text" value={tempValue} onChange={ (e) => onTempChange(e,scale)}/>
    
                {/* <BoilingVerdict celcTemperature={parseFloat(temperature)}/>             */}
            </fieldset>
        )
    
}

export default TemparatureInput