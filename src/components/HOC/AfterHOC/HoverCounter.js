import withCounter from "../ActiveHOC/withCounter"


const HoverCounter = (props) => {
    const {count, incrementCounter} = props
    
    return (
        <>
        
            <h2 onMouseOver={incrementCounter}> Hover me to Count..... which is {count} times </h2>
        </>
    )
}

export default withCounter(HoverCounter)