import React, { Component, Fragment } from 'react';
import axios from 'axios';
import style from './forecast.less';
import ForecastChart from './forecastChart/ForecastChart';


class Forecast extends Component {

    state = {
        forecast: []
    }

    componentDidMount = () => {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=40.7128&lon=-74.0060&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial`)
            .then(res => res.data.list)
            .then(forecast => this.setState({ forecast }))
    }

    render() {
        console.log(this.state)
        return (
            <Fragment>
                <h1 className={ style.forecastHeader }>Weather Forecast created with D3!</h1>
                <ForecastChart/>
            </Fragment> 
        )
    }
}


export default Forecast;