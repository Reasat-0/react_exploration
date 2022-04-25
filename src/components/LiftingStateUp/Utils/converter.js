

export const converter = (temperature, convertTo) => {
    temperature = parseFloat(temperature)

    if(Number.isNaN(temperature)){
        return '';
    }
    const convertedResult = convertTo(temperature);
    const finalResult = Math.round(convertedResult * 1000) / 1000;

    return finalResult.toString()
    
}


export const toCelcius= (farhenheit) => {
    return ( farhenheit - 32 ) *  ( 5 / 9 );
}

export const toFarhenheit= (celcius) => {
    return ( celcius  * ( 9 / 5) ) + 32;
}