// import Product from "./Product";

const Juice = (props) => {

        const {showBrand, showEstd} = props

        let brandName = showBrand ? showBrand('PEPSICO') : 'Unknown Brand'
        let estdTime = showEstd ? showEstd('1960') : 'No ESTD'

        console.log(props)

        return (
            <>
                {`This Juice Is Of ${brandName} - ${estdTime}`}
            </>
        )
}

export default Juice;