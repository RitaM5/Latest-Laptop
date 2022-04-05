import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Review from './Components/Review/Review'
import DashBoard from './Components/DashBoard/DashBoard'
import About from './Components/Blogs/Blogs'
import NotFound from './Components/NotFound/NotFound'
import Blogs from './Components/Blogs/Blogs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className="py-3 text-center">Asus Latest Laptop!!</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path='/showmore' element={<Review></Review>}></Route>
      </Routes>
    </div>
  )
}

export default App
