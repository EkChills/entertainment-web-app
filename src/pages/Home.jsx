import React from 'react'
import Search from '../components/Search'
import SideBar from '../components/SideBar'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'



const Home = () => {
  return (
    <div className='min-h-[100vh] w-full bg-DarkBlue'>
      <main className='container mx-auto pt-20 px-3 md:pl-[4.5rem] lg:pl-[8rem] md:pt-10 overflow-hidden '>
        <Search >Search for movies or Tv series</Search>
        <Trending />
        <Recommended />
      </main>
    </div>
  )
}

export default Home