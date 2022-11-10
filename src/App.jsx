import React, { useEffect } from 'react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import { AppProvider } from './store/Context'
import Movies from './pages/Movies'
import Tvseries from './pages/Tvseries'
import BookmarkedSeries from './pages/BookmarkedSeries'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProtected from './pages/SharedProtected'


function updateStore ()  {
  if (localStorage.getItem('log')) {
    return JSON.parse(localStorage.getItem('log'))
  }

  return false
}


const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(updateStore())

  useEffect(() => {
    localStorage.setItem('log', JSON.stringify(loggedIn))
  }, [loggedIn])
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>

          <Route path="/" element={<SharedLayout loggedIn={loggedIn} />} >
            <Route index element={loggedIn ? <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path='/Home' element={<ProtectedRoute loggedIn={loggedIn}>
              <Home />
            </ProtectedRoute>} />
            {loggedIn && <Route path='/Movies' element={<Movies />} />}
            {loggedIn && <Route path='/TvSeries' element={<Tvseries />} />}
            {loggedIn && <Route path='/Bookmarked' element={<BookmarkedSeries />} />}
          </Route>
          

      

        </Routes>
      </AppProvider>
    </BrowserRouter>
    
  )
}

export default App