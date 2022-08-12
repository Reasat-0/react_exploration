
import React from 'react'


import MyContextObj from './ComponentsNew/Contexts/MyContextObj'
import UserComponent from './ComponentsNew/CustomContext/UserComponent'
// Here what shall we do.... Lets say we have several components

// Lets Say....

//                                 BuildingCustomContext
//                                  ________|_________ 
//                                 |                  |
//                          AboutComponent         User--------> Buyer/Seller --------> Account   

class BuildingCustomContext extends React.Component{
    
    state = {
        accountBalance : '$40000'
    }
    render(){
        const {accountBalance} = this.state
        return(
            <MyContextObj.Provider value={{accountBalance}}>
                <UserComponent/>
            </MyContextObj.Provider>
            // <MyContext.Provider value={accountBalance}>

            // </MyContext.Provider>
        )
    }
}

export default BuildingCustomContext