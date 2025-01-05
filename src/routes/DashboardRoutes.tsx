import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'

function DashboardRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}

export default DashboardRoutes