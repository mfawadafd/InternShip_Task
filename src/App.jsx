import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import CourseDetail from './pages/CourseDetail'
import Booking from './pages/Booking'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<SearchResults />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App