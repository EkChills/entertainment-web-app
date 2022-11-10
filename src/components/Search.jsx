import React from 'react'
import search from '../assets/icon-search.svg'
import { useGlobalContext } from '../store/Context'

const Search = ({children}) => {
  const {searchValue, setSearchValue} = useGlobalContext();
  return (
    <div className='w-full flex space-x-1 items-center bg-transparent'>
      <img src={search} alt="search" />
      <input type="text" value={searchValue} placeholder={children} onChange={(e) => setSearchValue(e.target.value)} className='bg-transparent caret-Red text-PureWhite placeholder:text-GreyishBlue text-xl w-full md:text-3xl outline-none' />
    </div>
  )
}

export default Search