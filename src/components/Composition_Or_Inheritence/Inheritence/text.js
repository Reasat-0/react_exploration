import React from 'react';
import Emoji from './emoji'


export default class Text extends Emoji{

    constructor(props){
        console.log(super(props).render)
    }

    hola () {
        return 0;
    }

    render(){
        const text = "Hello From text";
        const decoratedText = this.addEmoji(text,' :) ')

        
        { console.log( super.render )}
        
        return(
            super.render(decoratedText)
        )
    }
}