

const Account = ({userCounter,addUser}) => {

    return(
        
        <>
            <h1>Hello From Account and now the number of Account is....{userCounter}</h1> 
        
            <button onClick={addUser}>Add User</button> 
        </>

    
    )
}

export default Account