import React from 'react'
import "./About.css"
import themePattern from "../../assets/Theme_pattern.png"
import profileImg from "../../assets/Profile.png"

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={themePattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profileImg} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-paragraph">
                        <p>Appena penso qualcosa lo metto; Appena penso qualcosa lo metto;Appena penso qualcosa lo metto;Appena penso qualcosa lo metto;Appena penso qualcosa lo metto;Appena penso qualcosa lo metto.</p>
                        <p>Appena penso qualcosa lo metto; Appena penso qualcosa lo metto;Appena penso qualcosa lo metto;Appena penso qualcosa lo metto;Appena penso qualcosa lo metto;Appena penso qualcosa lo metto.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-single-skill">
                            <p>HTML & CSS</p><hr style={{width:"50%"}} />
                        </div>
                        <div className="about-single-skill">
                            <p>React JS</p><hr style={{width:"70%"}} />
                        </div>
                        <div className="about-single-skill">
                            <p>Javascript</p><hr style={{width:"60%"}} />
                        </div>
                        <div className="about-single-skill">
                            <p>Next JS</p><hr style={{width:"50%"}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Year of experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>numero di progetti</h1>
                    <p>progetti completati</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default About