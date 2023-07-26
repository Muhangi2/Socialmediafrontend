import React from 'react'
import './Profile.css'
import  swipeball from  "../Images/swpeball.jpeg"
import hazard from "../Images/hazard.jpeg"
const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile_images'>
            <img src={hazard} alt=''/>
            <img src={swipeball} alt="" />
        </div>
       <div className='profiledetail'>
        <span>Eliod</span>
        <span>Developer</span>
       </div>
       <div className='follow'>
         <hr/> 
         <div >
          <div className='followers'>
            <span>28359</span>
            <span>followers</span>
          </div>
          <div className='centerdiv'></div>
          <div className='following'>
            <span>2</span>
            <span>following</span>
          </div>
          </div>
          <hr/>
       </div>
       <span>
        My profile
       </span>
    </div>
  )
}

export default Profile
