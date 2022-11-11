import React from 'react'
import Search from '../components/Search'
import SideBar from '../components/SideBar'
import MovieList from '../components/MovieList'


const Movies = () => {
  return (
    <div className='min-h-[100vh] w-full bg-DarkBlue'>
      <main className='container mx-auto pt-20 px-3 md:pl-[4.5rem] lg:pl-[8rem] md:pt-10 overflow-hidden '>
        <Search>Search for Movies</Search>
        <MovieList />
      </main>
    </div>
  )
}

export default Movies