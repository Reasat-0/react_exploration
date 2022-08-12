
// Lets Say....

//                                     ContextMore
//                                  ________|_________ 
//                                 |                  |
//                          AboutComponent           User--------> Buyer/Seller --------> Account   

import React from 'react'
import UserComponent from './ComponentsNew/ContextMore/UserComponent'

import ReactContext from './ComponentsNew/Contexts/MyContextObj'

class ContextMore extends React.Component{

    state ={
        userCounter : 0
    }

    addUser = () => {
        this.setState((prev)=>({
            userCounter : prev.userCounter + 1 
        }))
    }

    render(){

        const {userCounter} = this.state
        
        return(
            <ReactContext.Provider value={{ userCounter, addUser : this.addUser}}>
                <UserComponent/>
            </ReactContext.Provider>
        )
    }

    // value = {
    //     userCounter : 0,
    //     addUser : addUser = () => {
    //         this.setState((prev)=>({
    //             userCounter : prev.userCounter + 1 
    //         }))
    //     }
    // }
}

export default ContextMore