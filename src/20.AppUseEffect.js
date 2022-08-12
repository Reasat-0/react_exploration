import { useState, useEffect } from "react";


const AppUseEffect = () => {

    const [count , setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    useEffect( () => {
        document.title = `Clicked ${count}`
    },[count])

    useEffect( () => {
        const interval = setInterval(timeTicking, 1000)


        // This set interval will create some pbm... when the component will be unmounted the clock
        // will be ticking on and on .... 
        // So we need to stop them on ComponentWillUnmount phase to use that... we need to return a function 
        // which will act like unmount...

        return () => {
            clearInterval(interval)
        }


    },[])


    const timeTicking = () => {
        setDate(new Date())
    }


    const handleCount = () => {
        setCount( (prev) => (
            prev + 1
        ))
    }

    return(

        <div>
            <p> Time : {date.toLocaleTimeString()}</p>
            
            <button onClick={handleCount}> Clicked {count} </button>
        </div>
    )
}

export default AppUseEffect;