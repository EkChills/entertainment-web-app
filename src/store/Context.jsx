import React, {useContext, useState, useCallback, useEffect} from 'react'
import data from '../data'

  const AppContext = React.createContext();

  const trends = data.filter((item) => item.isTrending === true)
  const recommends = data.filter((item) => item.isTrending === false)
  const movieData = data.filter((item) => item.category === 'Movie')
  const tv = data.filter(item => item.category === 'TV Series')




  export const AppProvider = ({children}) => {
    const [trending, setTrending] = useState(trends)
    const [recommended, setRecommended] = useState(recommends)
    const [movies, setMovies] = useState(movieData)
    const [tvSeries, setTvSeries] = useState(tv)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [searchValue, setSearchValue] = useState('')

 



    
    return (
      <AppContext.Provider value={{trending, setTrending, recommended, setRecommended, movies, setMovies,
        tvSeries, setTvSeries, isLoggedIn, setIsLoggedIn,  searchValue, setSearchValue,
      }}>
        {children}
      </AppContext.Provider>
    )
  }

  const useGlobalContext = () => {
    return useContext(AppContext);
  }


export {AppContext, useGlobalContext}