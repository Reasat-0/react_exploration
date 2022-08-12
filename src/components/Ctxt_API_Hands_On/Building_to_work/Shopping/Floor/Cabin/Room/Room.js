
const Room = ({window_count,increaseWindow}) => {
    return (

        <>
            <h1> Hello I am from the room !!! and I have got {window_count} windows </h1>
            <h5> Please Give Me more Windows.... By Clicking MOre...</h5>

            <button type="button" onClick={increaseWindow}>more</button>
        </>
    )
}

export default Room