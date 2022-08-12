
import React from 'react'

class Product extends React.Component{

    showBrandName = (brand_name) => {
        return brand_name + ' ISO-3000'
    }
    
    render(overrideText){
        const {children} = this.props;

        let text = overrideText ? overrideText : 'No text given';
        return(
            children({showBrandName : this.showBrandName})
        )
    }
}

export default Product;