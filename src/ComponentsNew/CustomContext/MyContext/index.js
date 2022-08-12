


class CustomBuiltContext {
    // constructor(value){
    //     this.value = value
    // }

    // Provider

    Provider = ({children,value}) =>{
        this.value = value;
        return children;
    }

    Consumer = ({children}) => {
        return children(this.value)
    }

}

const CustomContext = (value = null) => {
    const myContext = new CustomBuiltContext(value)
    
    return {
        Provider : myContext.Provider,
        Consumer : myContext.Consumer
    }
}

export default CustomContext;
