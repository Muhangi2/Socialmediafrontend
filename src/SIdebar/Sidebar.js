import React from 'react'
import './Sidebar.css'
import Logosearch from '../Logosearch/Logosearch';
import Profile from '../Profilecard/Profile';
import Folllowerscard from '../Followers/Folllowerscard';

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <Logosearch/>
       <Profile/>
       <Folllowerscard/>
    </div>
  )
}

export default Sidebar
