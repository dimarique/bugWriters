import { useState } from 'react'
import Footer from './components/footer/footer'
import './App.css'
import Hero from './components/HeroBlock/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Hero />
      <Footer />
    </>
  )
}

export default App
