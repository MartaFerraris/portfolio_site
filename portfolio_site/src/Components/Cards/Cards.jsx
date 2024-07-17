import React from 'react'
import "./Cards.css"
import arrowIcon from "../../assets/arrow.png"

const Cards = ({data}) => {
    return (
        <div className='cards-container'>
            {data.map((el, i) => {
                return <div key={i} className='cards-format'>
                    <h3>{el.sName}</h3>
                    <p>{el.sDesc}</p>
                    <div className='cards-readmore'>
                        <p>Read More</p>
                        <img src={arrowIcon} alt="" />
                    </div>
                </div>
            })}
        </div>
    )
}

export default Cards