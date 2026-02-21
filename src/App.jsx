import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//IMPORT SECTIONS 
import Header from './components/layout/Header'
import Hero from "./sections/Hero"
import Services from './sections/Services'
import Projects from './sections/Projects'
import WebDevServices from './sections/WebDevServices'
import Contact from './sections/Contact'
import Footer from './components/layout/Footer'

//IMPORT SCROLL HANDLER
import ScrollHandler from './components/ScrollHandler'

const HomeLayout = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Services />
      <Projects />
      <WebDevServices />
      <Contact />
    </main>
    <Footer />

  </>
)

function App() {

  return (
    < BrowserRouter >

      <ScrollHandler />
      
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/inicio' element={<HomeLayout />} />
        <Route path='/servicios' element={<HomeLayout />} />
        <Route path='/proyectos' element={<HomeLayout />} />
        <Route path='/desarrollo-web' element={<HomeLayout />} />
        <Route path='/contacto' element={<HomeLayout />} />


      </Routes>

    </ BrowserRouter >

  );
}

export default App
