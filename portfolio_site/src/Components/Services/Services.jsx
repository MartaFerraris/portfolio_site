import React from 'react'
import "./Services.css"
import theme_pattern from "../../assets/Theme_pattern.png"
import Services_Data from "../../assets/services_data.js"
import arrow_icon from "../../assets/arrow.png"

const Services = () => {
    return (
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {Services_Data.map((serv, i) => {
                    return <div key={i} className='services-format'>
                        <h3>{serv.s_name}</h3>
                        <p>{serv.s_desc}</p>
                        <div className='services-readmore'>
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services