
import React from 'react'

class Estd extends React.Component{

    showEstdTime = (estdTime) => {
        return 'since ' + estdTime
    }
    
    render(overrideText){
        const {children} = this.props;


        let text = overrideText ? overrideText : 'No text given';
        return(
            children({showEstdTime : this.showEstdTime})
            
        )
    }
}

export default Estd;