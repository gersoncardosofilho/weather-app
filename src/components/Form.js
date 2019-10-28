import React from 'react'
import {Button} from 'react-bootstrap'

class Form extends React.Component{
    render(){
        return (
            <form onSubmit = {this.props.getWeather}>
                <input type='text' className = 'myInput' name = 'city' placeholder='City...' />
                <input type='text' className = 'myInput' name = 'country' placeholder='Country...' />
                <Button type = 'submit' variant = "success">Get Weather</Button>
            </form>
        )
    }
}

export default Form