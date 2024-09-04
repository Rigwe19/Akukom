// import { useState } from 'react'
// import './assets/css/style.css'
// import './assets/css/bootstrap.min.css'
import AboutComponent from './components/AboutComponent'
import HeroComponent from './components/HeroComponent'
import NavBarComponent from './components/NavBarComponent'
import VisionComponent from './components/VisionComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComponent />
      <HeroComponent />
      <AboutComponent />
      <VisionComponent />
    </>
  )
}

export default App
