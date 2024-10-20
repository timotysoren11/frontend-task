import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Category from './components/categories/Category'
import Service from './components/services/Service'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/card' element={<Category />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
