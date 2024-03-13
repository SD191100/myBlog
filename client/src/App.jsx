/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './screens/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import NewPost from './screens/NewPost'
import Explore from './screens/Explore'
import TagList from './screens/TagList'
import Error from './screens/Error'
import Posts from './screens/Posts'

const App = () => {
  return (
    <div className='bg-neutral-900 min-h-screen text-white pb-10 pt-1 sm:pb-32' >
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore/:tagTitle' element={<TagList />} />
          <Route path='/guide/:slug' element={<Posts />} />
          <Route path='/new' element={<NewPost />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App