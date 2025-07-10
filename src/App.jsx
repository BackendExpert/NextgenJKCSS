import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage'
import Navbar from './components/Nav/Navbar'
import GetStarted from './pages/GetStart/GetStarted'
import Footer from './components/Footer/Footer'

function AppContent() {
    const location = useLocation()
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        if (location.pathname === '/') {
            setShowNavbar(false)
            return
        }

        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setShowNavbar(false)
            } else {
                setShowNavbar(true)
            }
            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY, location.pathname])

    const showFooter = location.pathname !== '/'

    return (
        <>
            {showNavbar && <Navbar />}
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/GetStarted' element={<GetStarted />} />
            </Routes>
            {showFooter && <Footer />}
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App
