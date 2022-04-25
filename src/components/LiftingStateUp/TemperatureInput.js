import React from 'react'


const TemperatureInput = (props) => {
    const {temperature, scale, handleTempChange} = props
    return(
        <>
            <fieldset>
                <legend> Enter Temperature Here...</legend>
                <input type="text" value={temperature} onChange={ (e) => handleTempChange(e, scale )} />
            </fieldset>
        </>
    )
}
export default TemperatureInput