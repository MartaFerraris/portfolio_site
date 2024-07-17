import React from 'react'
import "./Profile.css"
import profileImg from '../../assets/Profile.png'

const Profile = () => {
    return (
        <div className='profile'>
            <img src={profileImg} alt="profile image" />
            <h1><span>I'm Marta Ferraris</span>, <br />frontend developer based in Italy.</h1>
            <p>I'm a frontend developer from Biella in Piedmont, and this is my website!</p>
            {/* <div className="profile-action">
                <div className="profile-connect">
                    Connect with me
                </div>
                <div className="profile-resume">My resume</div>
            </div> */}
        </div>
    )
}

export default Profile