import React, {useState} from 'react'
import { useGlobalContext } from '../store/Context'
import imgg from '../assets/thumbnails/dark-side-of-the-moon/trending/large.jpg'
import './trending.css'
import movie from '../assets/icon-nav-movies.svg'
import bookmark from '../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../assets/icon-bookmark-full.svg'


const Trending = () => {
  const {trending, setTrending} = useGlobalContext();
  // const [boomarkTrend, setBookmarkTrend] = useState(trending)

  const Bookmark = (curr) => {
    setTrending(prev => prev.map(item => {
      if(item.title === curr) {
        return {...item, isBookmarked:!item.isBookmarked}
      }
      return item
    }))  
  }
  return (
    <div className='w-full mt-4'>
      <h3 className='text-xl md:text-3xl text-PureWhite mb-4'>Trending</h3>
      <div className="flex overflow-scroll scrollbar-hide space-x-6">
        {
          trending.map((item, index) => {
            const {trending:{small}, trending:{large}} = item.thumbnail
            const {year, rating, title} = item
            return (
              <div key={index} className="relative">
                <div className='p-3 rounded-full absolute top-2 right-2 bookmark-cont cursor-pointer' onClick={() => Bookmark(title)} >
                {item.isBookmarked ? <img src={bookmarkFull} alt="bookmark"  /> :
                  <img src={bookmark} alt="bookmark"  />}
                </div>
                <div className="flex flex-col absolute bottom-5 left-5">
                  <div className="flex text-base md:text-base trend-text items-center space-x-1 ">
                    <span>{year}</span>   <span>&#183;</span>
                    <img src={movie} alt="movie" />
                    <span>&#183;</span>
                    <span>{rating}</span>
                  </div>
                  <h3 className='text-xl  text-PureWhite'>{title}</h3>
                </div>
                <img src={small} alt="trending" className='md:hidden min-w-[15rem] rounded-lg' />
                <img src={large} alt="trending" className='hidden md:block min-w-[25rem] rounded-lg' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Trending