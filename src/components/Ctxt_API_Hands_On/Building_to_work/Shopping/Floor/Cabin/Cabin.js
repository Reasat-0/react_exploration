import Room from './Room/Room'

import { createContext } from 'react';
// Custom Context 

import BuildingContext from '../../../../../../CustomContexts/buildingContext';

const Cabin = ({test_value}) =>  {
    return (
        <>

            <h1> Hello From Cabin </h1>
            {/* MY Custom Context */}
            <BuildingContext.Consumer>
                { 
                    ( {window_count, increaseWindow} ) => (
                        <Room window_count={window_count} increaseWindow={increaseWindow} />  
                    )
                }
            </BuildingContext.Consumer>


            {/* React Custom Context */}

            {/*  */}

            {/* <createContext.Consumer>
                { 
                    ( {window_count, increaseWindow} ) => (
                        <Room window_count={window_count} increaseWindow={increaseWindow} />  
                    )
                }
            </createContext.Consumer> */}
            
        </>
    )
}

export default Cabin;