import React from 'react'

const Weather = props => (
    <div className = 'weather__info'>
      {
        props.city && props.country && 
        <p className = 'weather__key'>Location:&nbsp;
          <span>{props.city}, {props.country}</span>
        </p>
      }
      {
        props.temperature && 
        <p className = 'weather__key'>Temperature:&nbsp;
        <span>{props.temperature}&nbsp;Celsius</span>
        </p>
      }
      {
        props.humidity && 
        <p className = 'weather__key'>Humidity:&nbsp;
         <span>{props.humidity} %</span>
         </p>
        }
      {
        props.description && 
        <p className = 'weather__key'>Description:&nbsp;
        <span>{props.description}</span>
        </p>
      }
      {props.error && 
        <div className = 'alert alert-danger'>{props.error}</div>
      }
    </div>
)

export default Weather