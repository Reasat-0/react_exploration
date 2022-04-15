import React from 'react'
import Button from './Button'

class Clock extends React.Component{
    state = {
        date : new Date(),
        locale : "bn-BD"
    }
    componentDidMount() {
        setInterval( () => {
            this.setState({
                date: new Date()
            })
        },1000)
    }
    handleLanguageChange = (e,locale) => {
        this.setState({
            locale: locale
        })
    }
    render(){
        console.log("Clock rendered")
        return(
            <>
                <h1> My Clock { this.state.date.toLocaleString(this.state.locale) } </h1>
                <Button 
                    changeFromParents = { this.handleLanguageChange }
                    locale = "ar-EG"
                    >
                    Change 
                </Button>
                
            </>
            
        )
    }
}

export default Clock