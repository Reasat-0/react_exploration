import withCounter from './withCounter'

const HoverCounter = ({count,handleCounter}) => {
    return(
        <h1 onMouseOver={handleCounter}> Hovered {count} Times </h1>
    )
}

export default withCounter(HoverCounter)