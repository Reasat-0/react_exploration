import React from 'react';



export default class Bracket extends React.Component{
    test_prop = 'hello';
    addBracket = (text,bracket) => {
        return (bracket + text + bracket)
    }
    render(){

        return(
            <>
                {this.props.children({ addBra : this.addBracket})}
            </>
        )
    }
}


