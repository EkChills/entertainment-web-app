import React from 'react'
import Search from '../components/Search'
import SideBar from '../components/SideBar'
import TvSeriesList from '../components/TvSeriesList'


const Tvseries = () => {
  return (
    <div className='min-h-[100vh] w-full bg-DarkBlue'>
      <main className='container mx-auto pt-20 px-3 md:pl-[4.5rem] lg:pl-[8rem] md:pt-10 overflow-hidden '>
        <Search>Search for Tv Series</Search>
        <TvSeriesList />
      </main>
    </div>
  )
}

export default Tvseries