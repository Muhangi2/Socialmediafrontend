import React from 'react'
import './Logosearch.css'
import { IoSearch } from 'react-icons/io5';
import { IoLogoTwitter } from 'react-icons/io5';
const Logosearch = () => {
  return (
    <div className='logosearch'>
      <IoLogoTwitter className='twittericon' size={40} />
      <div className='search'>
        <input type='text' placeholder='search'/>
        <div className='icon_search'>
           <IoSearch className='searchicon' size={30} />
        </div>
       </div>
    </div>
  )
}

export default Logosearch
