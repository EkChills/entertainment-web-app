import React, {useState, useCallback, useEffect} from 'react'
import { useGlobalContext } from '../store/Context'
import bookmark from '../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../assets/icon-bookmark-full.svg'
import movie from '../assets/icon-nav-movies.svg'
import data from '../data'




const getBookmarkedTv = () => {
  if(localStorage.getItem('bookmarkedTv')) {
    return JSON.parse(localStorage.getItem('bookmarkedTv'))
  }
  return data.filter(item => item.category === 'TV Series')

}

const fakeTv = getBookmarkedTv()
const TvSeriesList = () => {
  const {tvSeries, setTvSeries, searchValue} = useGlobalContext();
  const [newTv, setNewTv] = useState(getBookmarkedTv())
  const [isSearching, setisSearching] = useState(false)


  // const [TvSeriesList, setTvSeriesList] = useState(movies)
  const Bookmark = (curr) => {
    setNewTv(prev => prev.map(item => {
      if(item.title === curr) {
        return {...item, isBookmarked:!item.isBookmarked}
      }
      return item
    }))  
  }

  const filterRecommended = useCallback(() => {
    const newVal = fakeTv.filter((item) => {
      if(searchValue === '') {
        return item
      }
      else {
        return item.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
      }

    })
    setNewTv(newVal)
  }, [searchValue])

  useEffect(() => {
    filterRecommended();
  }, [filterRecommended, searchValue])

  useEffect(() => {
    localStorage.setItem('bookmarkedTv', JSON.stringify(newTv))
    console.log('mee');
  },[newTv])

  useEffect(() => {
    if(searchValue !== '') {
      setisSearching(true)
    } else {
      setisSearching(false)
    }
  }, [searchValue])
  return (
    <div className='mt-3'>

      {isSearching ? <h3 className='text-xl md:text-3xl text-PureWhite mb-4'>{`found ${newTv.length} results for '${searchValue}'`}</h3> : <h3 className='text-xl md:text-3xl text-PureWhite mb-4'>Tv Series</h3>}

          <div className='grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4'>
      {
        newTv.map((item, index) =>  {
          const {regular:{small}, regular:{large}} = item.thumbnail
          const {year, rating, title} = item
          return (
            <div className='relative' key={index} >
                <div className='p-3 rounded-full absolute top-2 right-2 bookmark-cont cursor-pointer ' onClick={() => Bookmark(title)} >
                  {item.isBookmarked ? <img src={bookmarkFull} alt="bookmark"  /> :
                  <img src={bookmark} alt="bookmark"  />}
                </div>
              <img src={small} alt="thumbnail" className='md:hidden min-w-[9rem] rounded-lg w-full' />
              <img src={large} alt="thumbnail" className='hidden md:block min-w-[10rem] rounded-lg w-full' />
              <div className="flex flex-col  bottom-5 left-5 mt-1">
                  <div className="flex text-base md:text-base trend-text items-center space-x-1 ">
                    <span>{year}</span>   <span>&#183;</span>
                    <img src={movie} alt="movie" />
                    <span>&#183;</span>
                    <span>{rating}</span>
                  </div>
                  <h3 className='text-xl  text-PureWhite'>{title}</h3>
                </div>
            </div>
            
          )
        })
      }
    </div>
    </div>

  )
}

export default TvSeriesList