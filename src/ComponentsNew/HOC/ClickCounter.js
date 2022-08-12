import withCounter from './withCounter'

const ClickCounter = ({count,handleCounter}) => {
    return(
        <button onClick={handleCounter}> Clicked {count} Times </button>
    )
}

export default withCounter(ClickCounter)