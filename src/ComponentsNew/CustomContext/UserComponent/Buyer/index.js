
import Account from "./Account"
import MyContextObj from "../../../Contexts/MyContextObj"
const Buyer = () => {
    return(
        <>
        
            <h1>Hello From Buyer</h1>

            <MyContextObj.Consumer>
                { 
                    ({accountBalance}) => <Account balance={accountBalance}/>
                }   
            </MyContextObj.Consumer>
        
        </>
    )
}

export default Buyer