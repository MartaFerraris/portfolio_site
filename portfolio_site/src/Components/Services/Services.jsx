import React from 'react'
import "./Services.css"
import themePattern from "../../assets/Theme_pattern.png"
import servicesData from "../../assets/services_data.js"
import arrowIcon from "../../assets/arrow.png"

const Services = () => {
    return (
        <div className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={themePattern} alt="" />
            </div>
            <div className="services-container">
                {servicesData.map((serv, i) => {
                    return <div key={i} className='services-format'>
                        <h3>{serv.sName}</h3>
                        <p>{serv.sDesc}</p>
                        <div className='services-readmore'>
                            <p>Read More</p>
                            <img src={arrowIcon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services