import React from "react";
import withCounter from '../ActiveHOC/withCounter'

function ClickCounter(props){

        const {count, incrementCounter} = props;
        return(
            <>
                <h5> Using HOC </h5>
            
                <button type="button" onClick={incrementCounter}> Clicked {count} times </button>
            </>
        )
}

export default withCounter(ClickCounter)