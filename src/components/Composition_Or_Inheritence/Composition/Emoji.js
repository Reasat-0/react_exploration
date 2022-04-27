import React from 'react';



export default class Emoji extends React.Component{
    test_prop = 'hello';
    addEmoji = (text,emoji) => {
        return (emoji + text + emoji)
    }

    hola222 = () =>{
        return 0;
    }

    render(){
        return(
            <>
                {this.props.children({ addEmo : this.addEmoji})}
            </>
        )
    }
}


