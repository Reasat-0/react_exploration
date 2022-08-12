
import React, { createContext } from 'react'

// Custom Context That I have made
import BuildingContext from '../../CustomContexts/buildingContext';


// 
import LivingHouse from './Building_to_live/LivingHouse';
import Shopping from './Building_to_work/Shopping/Shopping';

class Ctxt_API_Hands_On extends React.Component {

    state = {
        window_count : 0
    }

    increaseNumverOfWindows = () => {
        this.setState((prev) => ({
            window_count : prev.window_count + 1
        }) )
    }


    render(){
        const {window_count} = this.state
        return (
            <>
                <BuildingContext.Provider 
                    value={{window_count, increaseWindos: this.increaseNumverOfWindows}}
                >
                    <LivingHouse/>
                </BuildingContext.Provider>


                {/* MY Custom Context */}
                <BuildingContext.Provider
                    value={{window_count, increaseWindow: this.increaseNumverOfWindows}}
                >
                    <Shopping/>
                </BuildingContext.Provider>


                {/* React Custom Context */}

                {/* <createContext.Provider value={{window_count, increaseWindow: this.increaseNumverOfWindows}}>
                    <Shopping/>
                </createContext.Provider> */}

            
            </>
        )
    }

    
}

export default Ctxt_API_Hands_On;