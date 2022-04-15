import React from 'react';

class Button extends React.Component{

    shouldComponentUpdate (nextProps, nextState) {
        const {changeFromParents : nextChangeFromParents, locale: nextLocale} = nextProps;
        const {changeFromParents : currentChangeFromParents , locale: currentLocale} = this.props;

        if( nextChangeFromParents === currentChangeFromParents){
            return false
        }

        return true;
    }

    render() {
        const {locale} = this.props;
        console.log(this.props)
        return(
            
            <button 
                onClick={ (e) => this.props.changeFromParents (e,locale)}> 
                {this.props.children} 
            </button>
        )
    }
}

export default Button;