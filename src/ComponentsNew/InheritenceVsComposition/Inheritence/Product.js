
import React from 'react'

class Product extends React.Component{

    showBrandName = (brand_name) => {
        return brand_name + ' ISO-3000'
    }

    render(overrideText){

        let text = overrideText ? overrideText : 'No text given';
        return(
            // console.log(this.isExpired(new Date().getDate()))
            text
        )
    }
}

export default Product;