

export default function BoilingVerdict({ celcTemperature = 0 }) {
    if(celcTemperature >= 100){
        return <p> Water Would Boil...</p>
    }
    else{
        return <p> Water Would Not Boil...</p>
    }
}