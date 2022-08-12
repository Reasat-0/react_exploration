

const Bulb = (props) => {
    return(
        <> 
            <p> Turned {props.turnedOn ? "OFF" : "ON"} & Bill is {props.bill} AED </p>

            {
                <button onClick={props.turnOnOff}> Turn {props.turnedOn ? "OFF" : "ON"} & Calculate </button>
            }
            
        </>
    )
}


export default Bulb