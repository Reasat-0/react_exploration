import Product from "./Product";

class Juice extends Product{
    constructor(props){
        super(props);
    }

    render(){
        const brandName = this.showBrandName('Pran')

        return (
            super.render(`This juice is of => ${brandName}`)
        )
    }
}

export default Juice;