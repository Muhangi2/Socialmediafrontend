import React from 'react'
import './Home.css'
import Sidebar from '../SIdebar/Sidebar'
import Posts from '../Posts/Posts'
import Rightside from '../Rightside/Rightside'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
       <Posts/>
       <Rightside/>
    </div>
  )
}

export default Home
