import { useState } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Projects from './pages/Projects'
import Studio from './pages/Studio'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <main className='relative  box-border overflow-hidden'>
        <div className='w-full '>
        <Header />

        </div>
        <div className=' '>
        <Routes >
          <Route  element={<Home />} path={"/*"} />
          <Route  element={<Projects />} path={"/proyectos"} />
          <Route  element={<Studio />} path={"/estudio"} />
          <Route  element={<Contact />} path={"/contacto"} />

        </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
