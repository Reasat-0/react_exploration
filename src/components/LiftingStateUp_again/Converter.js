


export function toCel(farhenheit){
    let celcius = ( parseFloat(farhenheit) - 32 ) * 5/9

    return celcius.toFixed(3)
}


export function toFar(celcius){
    let farhenheit = ( parseFloat(celcius) * 9/5 ) + 32;

    return farhenheit.toFixed(3)
}


export function converter(value, converTo){
    var value = parseFloat(value).toFixed(3)
    return converTo(value).toString();
}