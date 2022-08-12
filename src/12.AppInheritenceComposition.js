import JuiceInheritence from './ComponentsNew/InheritenceVsComposition/Inheritence/Juice';


// Composition

import ProductCompositon from './ComponentsNew/InheritenceVsComposition/Composition/Product_'
import JuiceComposition from './ComponentsNew/InheritenceVsComposition/Composition/Juice_'
import EstdComposition from './ComponentsNew/InheritenceVsComposition/Composition/Estd_'


const AppNew = () => {
    return (
        <>
        
            {/* <Product /> */}
            {/* <JuiceInheritence /> */}

            {/* Composition */}

            <ProductCompositon>
                { ({showBrandName}) => (
                    <EstdComposition>
                        {
                            ({showEstdTime}) => (
                                <JuiceComposition
                                    showEstd={showEstdTime}
                                    showBrand={showBrandName}
                                />
                            )
                        }
                    </EstdComposition>
                ) }
            </ProductCompositon>

        
        </>
    )
}

export default AppNew;