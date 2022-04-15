import React from 'react'


export default class Form extends React.Component{

    state = {
        name : "***",
        text: "",
        country : "",
        isSingle : true
    }

    handleChange = (e) => {

        console.log(e.target.type)
        switch (e.target.type){
            case 
                "text":    
                    this.setState({
                        name : e.target.value
                    })
                break;
                    
            case 
                "textarea":    
                    this.setState({
                        text : e.target.value
                    })
                break;

                case 
                "select-one":    
                    this.setState({
                        country : e.target.value
                    })
                break;

                case 
                "checkbox":    
                    this.setState({
                        isSingle : e.target.checked
                    })
                break;

            default :   this.setState({
                            
                        })
                        break;

        }

    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        const {name, text, country, isSingle} = this.state
        return(
            <form onSubmit={this.submitHandler}>
                <h1>{text} {name}...</h1> 
                <input type="text" value={name} onChange={this.handleChange} placeholder="Enter Name"/>
                <br/>
                <br/>
                <textarea  name="textarea" value={text} onChange={this.handleChange} placeholder="Enter Greeting"></textarea>
                <br/>
                <br/>
                <select value={country} onChange={this.handleChange}>
                    <option value="bd"> Bangladesh </option>
                    <option value="ind"> India </option>
                </select>
                <br/>
                <br/>
                <input type="checkbox" checked={isSingle} onChange={this.handleChange} />
                <br/>
                <br/>
                <input type="submit" value="SUBMIT" />
            </form>
        )
    }
}