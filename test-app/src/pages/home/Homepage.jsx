import Header from '.././header/Header'
import Posts from '.././posts/Posts'
import Sidebar from '.././sidebar/Sidebar'
import './home.css'

import React from 'react'

const Home = () => {
  return (
    <>
    <Header />
    <div>Home</div>
    <Posts />
    <Sidebar/>
    </>
  )
  
}

export default Home