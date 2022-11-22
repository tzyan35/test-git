import './topbar.css'
import React from 'react'

const TopBar = () => {
  return (
    <div className='top'>
      <div className="topLeft">
      {/* <FontAwesomeIcon icon="fa-brands fa-square-facebook" /> */}
      <i class="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-square-twitter"></i>
      <i class="fa-brands fa-square-pinterest"></i>
      <i class="fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">center</div>
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
      </ul>
      <div className="topRight">
        <img className="topImg"
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        />
      <i class="fa-regular fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar