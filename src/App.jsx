import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage'
import Navbar from './components/Nav/Navbar'
import GetStarted from './pages/GetStart/GetStarted'
import Footer from './components/Footer/Footer'
import Intridoction from './pages/GetStartPage/Intridoction'
import Installation from './pages/Installation/Installation'

function AppContent() {
    const location = useLocation()
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        if (location.pathname === '/') {
            setShowNavbar(false)
            return
        }
    }, [lastScrollY, location.pathname])

    const showFooter = location.pathname !== '/'

    return (
        <>
            {showNavbar && <Navbar />}
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/Docs/' element={<GetStarted />}>
                    <Route path='Introduction' element={<Intridoction />} />
                    <Route path='Installation' element={<Installation /> } />
                </Route>
            </Routes>
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
