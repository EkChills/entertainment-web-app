import React from 'react'
import Search from '../components/Search'
import SideBar from '../components/SideBar'
import Trending from '../components/Trending'
import Recommended from '../components/Recommended'
import BookmarkedMovies from '../components/BookmarkedMovies'
import BookmarkedTvSeries from '../components/BookmarkedTvSeries'



const BookmarkedSeries = () => {
  return (
    <div className='min-h-[100vh] w-full bg-DarkBlue'>
      <main className='container mx-auto pt-20 px-3 md:pl-[4.5rem] lg:pl-[8rem] md:pt-10 overflow-hidden '>
        <Search >Search for bookmarked Movies or Tv Series</Search>
        <BookmarkedMovies />
        <BookmarkedTvSeries />
      </main>
    </div>
  )
}

export default BookmarkedSeries