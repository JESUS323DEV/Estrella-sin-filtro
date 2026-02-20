import { useState } from 'react'

import Header from './components/layout/header'
import Hero from "./sections/Hero"
import Services from './sections/Services'
import Projects from './sections/Projects'
import WebDevServices from './sections/WebDevServices'
import Contact from './sections/Contact'
import Footer from './components/layout/Footer'


function App() {

  return (
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
}

export default App
