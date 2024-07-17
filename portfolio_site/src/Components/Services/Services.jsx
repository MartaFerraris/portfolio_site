import React, { useState } from 'react'
import "./Services.css"
import themePattern from "../../assets/Theme_pattern.png"
import servicesData from "../../assets/services_data.js"
import Cards from '../Cards/Cards.jsx'

const Services = () => {

const [data, setData] = useState(servicesData)

    return (
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={themePattern} alt="" />
            </div>
            <Cards data={data} />
        </div>
    )
}

export default Services