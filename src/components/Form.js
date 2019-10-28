import React from 'react'

class Form extends React.Component{
    render(){
        return (
            <form onSubmit = {this.props.getWeather}>
                <input type='text' className = 'myInput' name = 'city' placeholder='City...' />
                <input type='text' className = 'myInput' name = 'country' placeholder='Country...' />
                <button className='myButton'>Get Weather</button>
            </form>
        )
    }
}

export default Form