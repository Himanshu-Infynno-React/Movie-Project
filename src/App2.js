import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import App from './App'
import MovieDetails from '../src/Components/MovieDetails/MovieDetails'
import { Routes, Route } from 'react-router-dom'

function App2() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/desc/:id' element={<MovieDetails />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App2
