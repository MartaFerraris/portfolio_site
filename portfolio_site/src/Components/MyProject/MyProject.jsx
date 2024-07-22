import React from 'react'
import "./MyProject.css"
import themePattern from "../../assets/Theme_pattern.png"
import projectsData from "../../assets/DataMock/myProject.js"
import { useNavigate } from 'react-router-dom'
import arrowRight from '../../assets/arrow.png'

const MyProject = () => {
    const navigate = useNavigate()
    return (
        <div className='myProject'>
            <div className="myProjTitle">
                <h1>My Projects</h1>
                <img src={themePattern} alt="" />
            </div>
            <div className="myProjContainer">
                {projectsData.map((proj, i) => {
                    for (let j = 0; j < proj?.projects.length; j++) {
                        return <div key={i}>
                            <div className='myProjCat'>{proj?.projCategory}</div>
                            <div onClick={() => {
                                if (proj.projCategory === "ToDo List") {
                                    navigate('/todolist')
                                } else if (proj.projCategory === "Web App") {
                                    navigate('/webapp')
                                } else {
                                    navigate('/website')
                                }
                            }}>
                                <div className='myProjTransVideo'>
                                    <div className='myProjTransition'>
                                        <div>Show More</div>
                                        <img src={arrowRight} alt="" />
                                    </div>
                                    <video loop autoPlay muted src={proj?.projects[j].projVideo} className='myProjVideo'></video>
                                </div>
                            </div>
                        </div>
                    }
                })}
            </div>
        </div>
    )
}

export default MyProject