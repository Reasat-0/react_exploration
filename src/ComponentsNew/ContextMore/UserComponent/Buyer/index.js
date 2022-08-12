
import Account from "./Account"
import ReactContext from "../../../Contexts/MyContextObj"
import React from "react"


import { useContext } from "react"


// const Buyer = () => {


//     return(
//         <>
        
//             <h1>Hello From Buyer</h1>

//             <MyContextObj.Consumer>
//                 { 
//                     ({userCounter, addUser}) => 
//                         <Account 
//                             userCounter={userCounter}
//                             addUser={addUser}
//                     />
//                 }   
//             </MyContextObj.Consumer>
        
//         </>
//     )
// }

// 
// Now we if want to use Buyer As a class Component we can receive the context values also in a different way..


export default function Buyer (){
    // componentDidMount(){
        
    // }

        // const {userCounter , addUser} = this.context;

        const context = useContext(ReactContext)

        const {userCounter,addUser} = context

        return(
            <>
            
                <h1>Hello From Buyer</h1>

                <ReactContext.Consumer>
                    { 
                        ({userCounter, addUser}) => 
                            <Account 
                                userCounter={userCounter}
                                addUser={addUser}
                        />
                    }   
                </ReactContext.Consumer>
                

                {/* Lets say we need the context values out of the render funciton...lets 
                    say on above of the render in a life cycle method we need the context..
                    WHAT CAN WE DO THEN ??????? 

                    Then we can declare the context of this component at the bottom of the script...


                    This Component.contextType = ReactContext;

                    When I will write this on bottom. Then inside of the this object the context property
                    will be populated with the value of ReactContext. I mean the object I have passed 
                    using the provider...

                */}

                {/* <Account
                    userCounter={userCounter}
                    addUser = {addUser}
                /> */}



                {/* 
                    On above example.... if we want to use same context in a functional component and 
                    if we need that out of the Consumer wrapper...then

                    WHAT SHOULD WE DO??? 

                    We may use........useContext hook.....

                */}

                <Account
                    userCounter={userCounter}
                    addUser = {addUser}
                />

            
            </>
        )
    }


// Buyer.contextType = ReactContext;